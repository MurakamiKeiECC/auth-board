"use client";

import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  author: {
    name: string;
  };
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/posts');
        const data = await response.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Layout>
      <h1 className="text-4xl font-extrabold text-center text-teal-700 mb-8">掲示板</h1>

      <ul className="space-y-6">
        {posts.length === 0 ? (
          <li className="text-center text-lg text-gray-600">まだ投稿がありません。</li>
        ) : (
          posts.map((post) => (
            <li key={post.id} className="bg-white p-6 rounded-lg shadow-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:border-teal-300">
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