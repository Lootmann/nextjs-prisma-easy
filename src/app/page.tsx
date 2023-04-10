import { ArticleList } from "./articles/ArticleList";
import { Article } from "@prisma/client";

async function getArticles() {
  const res = await fetch("http://localhost:3000/api/articles", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("hogehoge");
  const data = await res.json();
  return data.articles as Article[];
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl">Hello Nextjs World :D</h2>

      <ArticleList articles={articles} />
    </div>
  );
}
