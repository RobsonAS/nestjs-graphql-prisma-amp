import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BlogTitle } from "../blog/BlogTitle";

export const PublicationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
