import { notFound } from "next/navigation";

export const getArticleBySlug = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/articles/${slug}`);
  if (!res.ok) notFound();

  const data = await res.json();
  const article = data.article;

  if (article === null) notFound();
  return article;
};
