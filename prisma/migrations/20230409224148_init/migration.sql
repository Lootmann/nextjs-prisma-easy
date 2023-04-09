/*
  Warnings:

  - Added the required column `authorId` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_comments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "articleId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "comments_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "comments_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_comments" ("articleId", "content", "id") SELECT "articleId", "content", "id" FROM "comments";
DROP TABLE "comments";
ALTER TABLE "new_comments" RENAME TO "comments";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
