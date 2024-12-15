import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ユーザーを複数作成
  const users = await prisma.user.createMany({
    data: [
      { email: "user1@example.com", name: "User One" },
      { email: "user2@example.com", name: "User Two" },
    ],
  });

  // 投稿を複数作成
  const posts = await prisma.post.createMany({
    data: [
      {
        title: "First Post",
        content: "Content of the first post.",
        authorId: 1,
      },
      {
        title: "Second Post",
        content: "Content of the second post.",
        authorId: 2,
      },
    ],
  });

  // コメントを複数作成
  const comments = await prisma.comment.createMany({
    data: [
      { content: "Great post!", postId: 1, authorId: 2 },
      { content: "Nice article!", postId: 2, authorId: 1 },
    ],
  });

  console.log("Test data has been seeded.");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
