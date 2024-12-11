# フルスタック掲示板アプリ設計 (Express + Next.js)

## 目次

1. [概要](https://www.notion.so/157d09f4737d80d19bccc99944de7bd8?pvs=21)
2. [ディレクトリ構成](https://www.notion.so/157d09f4737d80d19bccc99944de7bd8?pvs=21)
3. [バックエンド設計](https://www.notion.so/157d09f4737d80d19bccc99944de7bd8?pvs=21)
    - [Prismaスキーマ](https://www.notion.so/157d09f4737d80d19bccc99944de7bd8?pvs=21)
    - [エンドポイント設計](https://www.notion.so/157d09f4737d80d19bccc99944de7bd8?pvs=21)
    - [主要コード例](https://www.notion.so/157d09f4737d80d19bccc99944de7bd8?pvs=21)
4. [フロントエンド設計](https://www.notion.so/157d09f4737d80d19bccc99944de7bd8?pvs=21)
    - [ページ構成](https://www.notion.so/157d09f4737d80d19bccc99944de7bd8?pvs=21)
    - [主要コード例](https://www.notion.so/157d09f4737d80d19bccc99944de7bd8?pvs=21)
5. [動作フロー](https://www.notion.so/157d09f4737d80d19bccc99944de7bd8?pvs=21)

---

## 概要

**掲示板アプリ**は、学内で情報共有するためのツールとして設計されています。

以下の技術スタックを使用して、バックエンドとフロントエンドを構築します。

- **バックエンド**: Express, Prisma, PostgreSQL/MySQL, JWT
- **フロントエンド**: Next.js (React), Axios
- **環境構築**: docker

### 機能要件

- **ユーザー管理**: ユーザーの登録、ログイン、認証
- **投稿機能**: 投稿の作成、編集、削除、一覧表示
- **認証保護**: 投稿の編集・削除はログイン中のユーザーのみが可能

---

## ディレクトリ構成
lua
auth-board/
├── backend/
│   ├── src/
│   │   ├── controllers/    # ビジネスロジックを呼び出すエンドポイント処理
│   │   │   ├── authController.js
│   │   │   └── postController.js
│   │   ├── routes/         # 各エンドポイントのルート定義
│   │   │   ├── authRoutes.js
│   │   │   └── postRoutes.js
│   │   ├── services/       # 各種ビジネスロジック
│   │   │   ├── authService.js
│   │   │   └── postService.js
│   │   ├── middlewares/    # ミドルウェア (認証やエラーハンドリング)
│   │   │   ├── authMiddleware.js
│   │   │   └── errorHandler.js
│   │   ├── prisma/         # Prismaクライアント
│   │   │   └── index.js
│   │   ├── config/         # 環境変数や設定ファイル
│   │   │   └── index.js
│   │   └── app.js          # サーバーエントリーポイント
│   ├── prisma/             # Prismaのスキーマ定義とマイグレーション
│   │   └── schema.prisma
│   ├── package.json        # バックエンド用の依存関係
│   ├── Dockerfile          # バックエンド用Dockerfile
│   └── .env                # 環境変数ファイル
├── frontend/
│   ├── components/         # 再利用可能なUIコンポーネント
│   │   ├── Layout.js
│   │   └── Navbar.js
│   ├── pages/              # 各ページのエントリーポイント
│   │   ├── index.js        # 投稿一覧ページ
│   │   ├── login.js        # ログインページ
│   │   ├── register.js     # 登録ページ
│   │   ├── posts/          # 投稿関連ページ
│   │   │   ├── index.js    # 投稿一覧
│   │   │   ├── [id].js     # 投稿詳細・編集ページ
│   │   │   └── create.js   # 新規投稿作成
│   ├── styles/             # スタイルファイル (CSS/SCSS)
│   ├── utils/              # APIクライアントやユーティリティ関数
│   │   └── apiClient.js
│   ├── package.json        # フロントエンド用の依存関係
│   ├── next.config.js      # Next.js設定
│   └── Dockerfile          # フロントエンド用Dockerfile
├── db_data/                # MySQLデータ永続化用
├── docker-compose.yml      # Docker Compose構成
├── README.md               # プロジェクト説明
└── .env                    # 環境変数ファイル

---

## バックエンド設計

prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String
  posts     Post[]   @relation("UserPosts")
  createdAt DateTime @default(now())
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  userId    Int
  user      User     @relation("UserPosts", fields: [userId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

---

### エンドポイント設計

| エンドポイント | HTTPメソッド | 機能 |
| --- | --- | --- |
| `/api/auth/register` | POST | ユーザー登録 |
| `/api/auth/login` | POST | ユーザーログイン（JWT発行） |
| `/api/posts` | GET | 投稿一覧取得 |
| `/api/posts` | POST | 投稿作成 |
| `/api/posts/:id` | PUT | 投稿編集 |
| `/api/posts/:id` | DELETE | 投稿削除 |

---

## フロントエンド設計

### ページ構成

| ページ | 機能 |
| --- | --- |
| `/` | 投稿一覧を表示する |
| `/login` | ユーザーログイン |
| `/register` | ユーザー登録 |
| `/posts/create` | 投稿作成フォーム |
| `/posts/[id]` | 投稿詳細表示（編集対応） |


---

## 動作フロー

1. **ユーザー登録**
    - `/register` ページでユーザーを登録
2. **ログイン**
    - `/login` ページでログインし、トークンを保存
3. **投稿作成・一覧取得**
    - `/posts/create` で投稿を作成
    - `/` で投稿一覧を表示

---

## 環境構築

### DockerFile（バックエンド用）

# ベースイメージ
FROM node:18-alpine

# 作業ディレクトリ
WORKDIR /usr/src/app

# 必要なファイルをコピー
COPY package.json package-lock.json ./
COPY prisma ./prisma/

# 依存関係をインストール
RUN npm install

# Prismaのスキーマを生成
RUN npx prisma generate

# アプリケーションのコードをコピー
COPY ./src ./src

# ホットリロードのためのdev用ライブラリをインストール
RUN npm install -g nodemon

# サーバーポート
EXPOSE 3001

# デフォルトコマンド
CMD ["npm", "run", "dev"]

## Dockerfile（フロントエンド用）

# ベースイメージ
FROM node:18-alpine

# 作業ディレクトリ
WORKDIR /usr/src/app

# 必要なファイルをコピー
COPY package.json package-lock.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのコードをコピー
COPY . .

# サーバーポート
EXPOSE 3000

# デフォルトコマンド
CMD ["npm", "run", "dev"]
---

## docker-compose.yml

version: '3.8'

services:
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    volumes:
      - ./backend:/usr/src/app
      - /usr/src/app/node_modules
    ports:
      - "3001:3001"
    environment:
      - DATABASE_URL=mysql://user:password@db:3306/db_name
      - JWT_SECRET=your_jwt_secret
    depends_on:
      - db

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    volumes:
      - ./frontend:/usr/src/app
      - /usr/src/app/node_modules
    ports:
      - "3000:3000"
    depends_on:
      - backend

  db:
    image: mysql:8.0
    restart: always
    environment:
      MYSQL_DATABASE: db_name
      MYSQL_USER: user
      MYSQL_PASSWORD: password
      MYSQL_ROOT_PASSWORD: root_password
    ports:
      - "3306:3306"
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data: