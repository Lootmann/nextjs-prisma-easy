import prisma from "../lib/prisma";
import { getArticlBySlug } from "./articles";

export const getAllCommentsBySlug = async (slug: string) => {
  const article = await getArticlBySlug(slug);
  if (!article) throw new Error(`Article ${slug} is Not Found`);

  const atricleId = article.id;
  const comments = await prisma.comment.findMany({
    where: {
      articleId: atricleId,
    },
    include: {
      commentedBy: true,
    },
  });

  return comments;
};
