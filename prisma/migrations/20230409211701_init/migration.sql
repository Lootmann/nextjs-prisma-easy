/*
  Warnings:

  - You are about to drop the column `userId` on the `articles` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `articles` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "comments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "articleId" INTEGER NOT NULL,
    CONSTRAINT "comments_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_articles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "articles_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_articles" ("content", "createdAt", "id", "slug", "title", "updatedAt") SELECT "content", "createdAt", "id", "slug", "title", "updatedAt" FROM "articles";
DROP TABLE "articles";
ALTER TABLE "new_articles" RENAME TO "articles";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
