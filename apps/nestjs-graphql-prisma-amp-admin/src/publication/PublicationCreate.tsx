import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BlogTitle } from "../blog/BlogTitle";

export const PublicationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="blogs"
          reference="Blog"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BlogTitle} />
        </ReferenceArrayInput>
        <TextInput label="Link" source="link" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
