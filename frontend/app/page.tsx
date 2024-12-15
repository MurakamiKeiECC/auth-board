"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /posts when the user visits the root URL
    router.push("/posts");
  }, [router]);

  return null; // You can render a loading indicator here if you like
}
