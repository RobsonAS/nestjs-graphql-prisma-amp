import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { PublicationWhereUniqueInput } from "../publication/PublicationWhereUniqueInput";

export type BlogUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  content?: string | null;
  name?: string | null;
  publication?: PublicationWhereUniqueInput | null;
  publishedDate?: Date | null;
};
