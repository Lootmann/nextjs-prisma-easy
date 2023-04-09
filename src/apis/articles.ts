import { notFound } from "next/navigation";
import prisma from "../lib/prisma";

export const getAllArticles = async () => {
  return await prisma.article.findMany();
};

export const getArticlBySlug = async (slug: string) => {
  const article = await prisma.article.findFirst({
    where: {
      slug: slug,
    },
    include: {
      author: true,
    },
  });

  if (article === null) {
    notFound();
  }

  return article;
};
