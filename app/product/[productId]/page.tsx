import React from "react";

export default function page({ params }: { params: { productId: string } }) {
  return <h1>Product Page {params.productId}</h1>;
}
