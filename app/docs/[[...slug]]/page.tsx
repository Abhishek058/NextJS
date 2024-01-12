import React from "react";

export default function page({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length == 2) {
    return (
      <h1>
        Welcome to {params.slug[0]} and {params.slug[1]}
      </h1>
    );
  }
  if (params.slug?.length == 1) {
    return <h1>Welcome to {params.slug[0]}</h1>;
  }
  return <h1>Welcome to Docs Page</h1>;
}
