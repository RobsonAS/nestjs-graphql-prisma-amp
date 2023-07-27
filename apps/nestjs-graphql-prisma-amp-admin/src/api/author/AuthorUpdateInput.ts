import { BlogUpdateManyWithoutAuthorsInput } from "./BlogUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  blogs?: BlogUpdateManyWithoutAuthorsInput;
  name?: string | null;
};
