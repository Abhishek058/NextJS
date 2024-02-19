import React from "react";
import Link from "next/link";

type productProp = { params: { productId: string } };

export const generateMetadata = ({ params }: productProp) => {
  return {
    title: `Product Page ${params.productId}`,
  };
};

export default function page({ params }: productProp) {
  return (
    <>
      <h1>Product Page {params.productId}</h1>
      <Link href="/about">About</Link>
    </>
  );
}
