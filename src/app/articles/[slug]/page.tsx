import { getArticlBySlug } from "@/apis/articles";
import { getAllCommentsBySlug } from "@/apis/comments";
import React from "react";

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const articlePromise = getArticlBySlug(params.slug);
  const commentPromise = getAllCommentsBySlug(params.slug);

  const [article, comments] = await Promise.all([
    articlePromise,
    commentPromise,
  ]);

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
        <p className="text-xl">{article.content}</p>
      </div>

      <hr className="my-4 border-zinc-500" />

      <div>
        <h3 className="mb-4 text-xl">Comments</h3>

        {comments.map((comment) => (
          <div>
            <p>{comment.commentedBy.name}</p>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
