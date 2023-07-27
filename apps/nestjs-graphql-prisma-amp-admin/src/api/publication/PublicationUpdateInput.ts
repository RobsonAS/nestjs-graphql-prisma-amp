import { BlogUpdateManyWithoutPublicationsInput } from "./BlogUpdateManyWithoutPublicationsInput";

export type PublicationUpdateInput = {
  blogs?: BlogUpdateManyWithoutPublicationsInput;
  link?: string | null;
  name?: string | null;
};
