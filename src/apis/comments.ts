import { Comment } from "@prisma/client";

export const getCommentsByArticleId = async (articleId: number) => {
  const res = await fetch(`http://localhost:3000/api/comments/${articleId}`);
  const data = await res.json();

  return data.comments as Comment[];
};
