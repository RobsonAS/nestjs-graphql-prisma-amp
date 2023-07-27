import { Author } from "../author/Author";
import { Publication } from "../publication/Publication";

export type Blog = {
  author?: Author | null;
  content: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  publication?: Publication | null;
  publishedDate: Date | null;
  updatedAt: Date;
};
