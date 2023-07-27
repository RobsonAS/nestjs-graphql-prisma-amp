import { BlogListRelationFilter } from "../blog/BlogListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AuthorWhereInput = {
  blogs?: BlogListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
