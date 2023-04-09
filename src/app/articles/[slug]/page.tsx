import React from "react";

export default function Article({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Article Detail</h1>
      <p>Article's slug: {params.slug}</p>
    </div>
  );
}
