import { getArticleBySlug } from "@/apis/articles";
import { getCommentsByArticleId } from "@/apis/comments";
import React from "react";

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);
  const comments = await getCommentsByArticleId(article.id);

  return (
    <div className="flex flex-col">
      <header className="flex flex-col bg-zinc-800">
        <h1 className="text-3xl mb-2">{article.title}</h1>

        <div className="flex items-baseline gap-4">
          <p className="text-xl">Author: {article.author.name}</p>
          <p>Created @ {article.createdAt.toLocaleString()}</p>
          <p>Updated @ {article.updatedAt.toLocaleString()}</p>
        </div>
      </header>

      <hr className="my-4 border-zinc-500" />

      <div className="py-4">
        <pre className="text-xl">{article.content}</pre>
      </div>

      <hr className="my-4 border-zinc-500" />

      <div>
        <h3 className="mb-4 text-xl">Comments</h3>

        <div className="flex flex-col gap-4">
          {comments.map((comment) => (
            <div
              className="flex gap-4 items-baseline border-b border-zinc-600 pb-1"
              key={comment.id}
            >
              <span className="bg-orange-800 py-1 px-2 rounded-sm">
                {comment.commentedBy.name}
              </span>

              <p className="text-xl">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
