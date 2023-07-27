import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PublicationWhereUniqueInput } from "../publication/PublicationWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BlogWhereInput = {
  author?: AuthorWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  publication?: PublicationWhereUniqueInput;
  publishedDate?: DateTimeNullableFilter;
};
