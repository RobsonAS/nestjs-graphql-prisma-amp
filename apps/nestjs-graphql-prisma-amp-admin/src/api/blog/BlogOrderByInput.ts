import { SortOrder } from "../../util/SortOrder";

export type BlogOrderByInput = {
  authorId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  publicationId?: SortOrder;
  publishedDate?: SortOrder;
  updatedAt?: SortOrder;
};
