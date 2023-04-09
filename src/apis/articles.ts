import prisma from "../lib/prisma";

export const getAllArticles = async () => {
  return await prisma.article.findMany();
};
