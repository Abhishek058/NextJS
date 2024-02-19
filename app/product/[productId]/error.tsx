"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      Error Occured! random == 1<h1>{error.message}</h1>
    </div>
  );
}
