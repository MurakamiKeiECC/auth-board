import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import cors from "cors";

// Prismaクライアントの初期化
const prisma = new PrismaClient();
const app = express();

// APIルータを作成
const apiRouter = express.Router();

// CORS設定
app.use(cors({
  origin: 'http://localhost:8080',  // フロントエンドのURLを指定
  methods: ['GET', 'POST'],        // 許可するHTTPメソッド
  allowedHeaders: ['Content-Type'], // 許可するヘッダー
}));

// ミドルウェアの設定
app.use(express.json());

// 投稿リスト取得用のレスポンスハンドラ
const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
        comments: true,
      },
    });
    if (!posts) {
      res.status(404).json({ error: "Posts not found" });
      return;
    }
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

// 投稿詳細取得用のレスポンスハンドラ
const getPostDetail = async (req: Request, res: Response): Promise<void> => {
  try {
    const postId = Number(req.params.id); // 投稿IDをパラメータから取得

    const post = await prisma.post.findUnique({
      where: { id: postId },
      include: {
        author: true,
        comments: true,
      },
    });

    if (!post) {
      res.status(404).json({ error: "Post not found" });
      return;
    }

    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch post details" });
  }
};

// 投稿IDに関連するコメントを取得するエンドポイント
const getPostComments = async (req: Request, res: Response): Promise<void> => {
  try {
    const postId = Number(req.params.id); // 投稿IDをパラメータから取得

    const comments = await prisma.comment.findMany({
      where: { postId },
      include: {
        author: true, // コメントの著者も取得する場合
      },
    });

    if (!comments) {
      res.status(404).json({ error: "Comments not found" });
      return;
    }

    res.status(200).json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};

// /api/users エンドポイントを定義
apiRouter.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    if (!users) {
      res.status(404).json({ error: "Users not found" });
      return;
    }
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// /api/posts エンドポイントを定義
apiRouter.get("/posts", getPosts);
apiRouter.get("/posts/:id", getPostDetail);

// /api/posts/:id/comments エンドポイントを定義
apiRouter.get("/posts/:id/comments", getPostComments);

// /api グループにルータを適用
app.use("/api", apiRouter);

// サーバーの起動
const server = app.listen(3000, () => {
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: https://github.com/prisma/prisma-examples/blob/latest/orm/express/README.md#using-the-rest-api`);
});
