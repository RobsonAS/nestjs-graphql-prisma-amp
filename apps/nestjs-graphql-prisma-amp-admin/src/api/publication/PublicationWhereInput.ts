import { BlogListRelationFilter } from "../blog/BlogListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PublicationWhereInput = {
  blogs?: BlogListRelationFilter;
  id?: StringFilter;
  link?: StringNullableFilter;
  name?: StringNullableFilter;
};
