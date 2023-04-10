import { notFound } from "next/navigation";
import { Article } from "@prisma/client";

export const getAllArticles = async () => {
  const res = await fetch("http://localhost:3000/api/articles");
  if (!res.ok) throw new Error("hoge");

  const data = await res.json();
  return data.articles as Article[];
};

export const getArticleBySlug = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/articles/${slug}`);
  if (!res.ok) throw new Error("!getArticleBySlug");
  const data = await res.json();
  const article = data.article;

  if (article === null) notFound();

  return article;
};
