import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { AUTHOR_TITLE_FIELD } from "../author/AuthorTitle";
import { PUBLICATION_TITLE_FIELD } from "../publication/PublicationTitle";

export const BlogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Author" source="author.id" reference="Author">
          <TextField source={AUTHOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Publication"
          source="publication.id"
          reference="Publication"
        >
          <TextField source={PUBLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="PublishedDate" source="publishedDate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
