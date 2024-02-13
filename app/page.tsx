import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <Link href="/product/3">Product</Link>
      <h1>Welcome to Home Page</h1>
      <Link href="/about">About</Link>
    </>
  );
}
