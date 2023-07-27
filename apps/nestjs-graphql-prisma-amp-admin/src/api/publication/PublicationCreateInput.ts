import { BlogCreateNestedManyWithoutPublicationsInput } from "./BlogCreateNestedManyWithoutPublicationsInput";

export type PublicationCreateInput = {
  blogs?: BlogCreateNestedManyWithoutPublicationsInput;
  link?: string | null;
  name?: string | null;
};
