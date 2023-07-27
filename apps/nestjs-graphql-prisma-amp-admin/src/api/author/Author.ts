import { Blog } from "../blog/Blog";

export type Author = {
  blogs?: Array<Blog>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
