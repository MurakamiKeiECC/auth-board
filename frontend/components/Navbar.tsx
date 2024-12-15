// components/Navbar.tsx

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-teal-700 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold">
          掲示板
        </Link>
        <div>
          <Link href="/" className="mx-4 hover:text-teal-200">ホーム</Link>
          <Link href="/posts" className="mx-4 hover:text-teal-200">投稿一覧</Link>
        </div>
      </div>
    </nav>
  );
}
