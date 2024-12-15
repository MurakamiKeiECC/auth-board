import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";

// Prismaクライアントの初期化
const prisma = new PrismaClient();
const app = express();

// APIルータを作成
const apiRouter = express.Router();

// ミドルウェアの設定
app.use(express.json());

// 成功レスポンスを返す共通関数
const sendSuccessResponse = (res: Response, data: any) => {
  res.status(200).json(data);
};

// エラーハンドリングの共通関数
const handleError = (res: Response, error: any, message: string) => {
  console.error(error);
  res.status(500).json({ error: message });
};

// ユーザーリスト取得用の汎用的なレスポンスハンドラ
const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    sendSuccessResponse(res, users);
  } catch (error) {
    handleError(res, error, "Failed to fetch users");
  }
};

// 投稿リスト取得用のレスポンスハンドラ
const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
        comments: true,
      },
    });
    sendSuccessResponse(res, posts);
  } catch (error) {
    handleError(res, error, "Failed to fetch posts");
  }
};

// /api/users エンドポイントを定義
apiRouter.get("/users", getUsers);
// /api/posts エンドポイントを定義
apiRouter.get("/posts", getPosts);

// /api グループにルータを適用
app.use("/api", apiRouter);

// サーバーの起動
const server = app.listen(3000, () => {
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: https://github.com/prisma/prisma-examples/blob/latest/orm/express/README.md#using-the-rest-api`);
});
