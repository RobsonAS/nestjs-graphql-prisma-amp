import { BlogCreateNestedManyWithoutAuthorsInput } from "./BlogCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  blogs?: BlogCreateNestedManyWithoutAuthorsInput;
  name?: string | null;
};
