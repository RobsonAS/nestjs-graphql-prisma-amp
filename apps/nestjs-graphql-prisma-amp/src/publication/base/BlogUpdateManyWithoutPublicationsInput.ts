/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { BlogWhereUniqueInput } from "../../blog/base/BlogWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BlogUpdateManyWithoutPublicationsInput {
  @Field(() => [BlogWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BlogWhereUniqueInput],
  })
  connect?: Array<BlogWhereUniqueInput>;

  @Field(() => [BlogWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BlogWhereUniqueInput],
  })
  disconnect?: Array<BlogWhereUniqueInput>;

  @Field(() => [BlogWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BlogWhereUniqueInput],
  })
  set?: Array<BlogWhereUniqueInput>;
}

export { BlogUpdateManyWithoutPublicationsInput as BlogUpdateManyWithoutPublicationsInput };
