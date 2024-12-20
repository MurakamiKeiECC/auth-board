// this csr

"use client";

import Layout from "../../../components/Layout";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
  };
}

interface Comment {
  id: number;
  content: string;
  author: {
    name: string;
  };
}

export default function PostDetail({ params }: { params: Promise<{ id: string }> }) {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [id, setId] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Unwrapping the params from the promise
    const fetchParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    };

    fetchParams();
  }, [params]);

  useEffect(() => {
    if (id) {
      const fetchPostData = async () => {
        try {
          const postResponse = await fetch(`http://localhost:3000/api/posts/${id}`);
          const postData = await postResponse.json();
          setPost(postData);

          const commentsResponse = await fetch(`http://localhost:3000/api/posts/${id}/comments`);
          const commentsData = await commentsResponse.json();
          setComments(commentsData);

          setLoading(false);
        } catch (error) {
          console.error("Failed to fetch post or comments:", error);
          setLoading(false);
        }
      };

      fetchPostData();
    }
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          <span className="text-lg text-gray-600">読み込み中...</span>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          <span className="text-lg text-red-600">投稿が見つかりません。</span>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className="text-4xl font-extrabold text-teal-700 mb-6">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-4">投稿者: {post.author.name}</p>

      <div>
        <h2 className="text-xl text-gray-800 font-semibold">投稿内容</h2>
        <p className="text-gray-700 mt-4">{post.content}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl text-gray-800 font-semibold mb-4">コメント</h2>
        {comments.length === 0 ? (
          <p className="text-gray-600">まだコメントはありません。</p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment) => (
              <li key={comment.id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <p className="text-gray-800 font-semibold">{comment.author.name}</p>
                <p className="text-gray-700 mt-2">{comment.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}
