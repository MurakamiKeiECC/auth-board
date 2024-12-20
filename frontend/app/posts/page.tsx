// this ssr

import Layout from "../../components/Layout";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  author: {
    name: string;
  };
}

async function fetchPosts(): Promise<Post[]> {
  const response = await fetch("http://backend:3000/api/posts", { cache: "no-store" }); // Disable caching for fresh data
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}

export default async function PostsPage() {
  const posts = await fetchPosts();

  return (
    <Layout>
      <h1 className="text-4xl font-extrabold text-center text-teal-700 mb-8">掲示板</h1>

      <ul className="space-y-6">
        {posts.length === 0 ? (
          <li className="text-center text-lg text-gray-600">まだ投稿がありません。</li>
        ) : (
          posts.map((post) => (
            <li
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:border-teal-300"
            >
              <h2 className="text-2xl font-semibold text-teal-900 mb-2">
                <Link href={`/posts/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-600">投稿者: {post.author.name}</p>
            </li>
          ))
        )}
      </ul>
    </Layout>
  );
}
