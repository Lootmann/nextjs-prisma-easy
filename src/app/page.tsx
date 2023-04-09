import { getAllArticles } from "@/apis/articles";

export default async function Home() {
  const articles = await getAllArticles();

  return (
    <div>
      <h2>Hello Nextjs World :D</h2>

      <div>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
