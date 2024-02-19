import React from "react";
import { notFound } from "next/navigation";

const getRandom = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default function page({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  const random = getRandom(2);
  // if (random == 1) {
  //   throw new Error("Error ocurred!");
  // }
  if (parseInt(params.reviewId) > 1000) {
    return notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
