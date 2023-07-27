import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AuthorTitle } from "../author/AuthorTitle";
import { PublicationTitle } from "../publication/PublicationTitle";

export const BlogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="author.id" reference="Author" label="Author">
          <SelectInput optionText={AuthorTitle} />
        </ReferenceInput>
        <TextInput label="Content" multiline source="content" />
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="publication.id"
          reference="Publication"
          label="Publication"
        >
          <SelectInput optionText={PublicationTitle} />
        </ReferenceInput>
        <DateTimeInput label="PublishedDate" source="publishedDate" />
      </SimpleForm>
    </Create>
  );
};
