import { getAllArticles } from "@/apis/articles";
import { ArticleList } from "./articles/ArticleList";

export default async function Home() {
  const articles = await getAllArticles();

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl">Hello Nextjs World :D</h2>

      <ArticleList articles={articles} />
    </div>
  );
}
