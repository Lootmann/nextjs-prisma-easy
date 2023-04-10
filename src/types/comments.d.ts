import { Article } from "./articles";
import { User } from "./users";

export type Comment = {
  id: number;
  content: string;
  article: Article;
  commentedBy: User;
};
