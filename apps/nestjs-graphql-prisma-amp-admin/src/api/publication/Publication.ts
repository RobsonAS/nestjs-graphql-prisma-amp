import { Blog } from "../blog/Blog";

export type Publication = {
  blogs?: Array<Blog>;
  createdAt: Date;
  id: string;
  link: string | null;
  name: string | null;
  updatedAt: Date;
};
