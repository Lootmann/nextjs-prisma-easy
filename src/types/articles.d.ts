import { Comment } from "./comments";
import { User } from "./users";

export type Article = {
  id: number;
  title: string;
  content: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  author: User;
  comments: Comment[];
};
