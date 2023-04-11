import React from "react";
import { ArticleDetail } from "./ArticleDetail";
import { Article } from "@/types/articles";

// NOTE:  JSX Component can't be async function!
export function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <div className="flex flex-col gap-6">
      {articles.map((article) => (
        <ArticleDetail key={article.id} article={article} />
      ))}
    </div>
  );
}
