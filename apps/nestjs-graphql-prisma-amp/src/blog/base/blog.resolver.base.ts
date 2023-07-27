/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateBlogArgs } from "./CreateBlogArgs";
import { UpdateBlogArgs } from "./UpdateBlogArgs";
import { DeleteBlogArgs } from "./DeleteBlogArgs";
import { BlogCountArgs } from "./BlogCountArgs";
import { BlogFindManyArgs } from "./BlogFindManyArgs";
import { BlogFindUniqueArgs } from "./BlogFindUniqueArgs";
import { Blog } from "./Blog";
import { Author } from "../../author/base/Author";
import { Publication } from "../../publication/base/Publication";
import { BlogService } from "../blog.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Blog)
export class BlogResolverBase {
  constructor(
    protected readonly service: BlogService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Blog",
    action: "read",
    possession: "any",
  })
  async _blogsMeta(
    @graphql.Args() args: BlogCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Blog])
  @nestAccessControl.UseRoles({
    resource: "Blog",
    action: "read",
    possession: "any",
  })
  async blogs(@graphql.Args() args: BlogFindManyArgs): Promise<Blog[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Blog, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Blog",
    action: "read",
    possession: "own",
  })
  async blog(@graphql.Args() args: BlogFindUniqueArgs): Promise<Blog | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Blog)
  @nestAccessControl.UseRoles({
    resource: "Blog",
    action: "create",
    possession: "any",
  })
  async createBlog(@graphql.Args() args: CreateBlogArgs): Promise<Blog> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        author: args.data.author
          ? {
              connect: args.data.author,
            }
          : undefined,

        publication: args.data.publication
          ? {
              connect: args.data.publication,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Blog)
  @nestAccessControl.UseRoles({
    resource: "Blog",
    action: "update",
    possession: "any",
  })
  async updateBlog(@graphql.Args() args: UpdateBlogArgs): Promise<Blog | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          author: args.data.author
            ? {
                connect: args.data.author,
              }
            : undefined,

          publication: args.data.publication
            ? {
                connect: args.data.publication,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Blog)
  @nestAccessControl.UseRoles({
    resource: "Blog",
    action: "delete",
    possession: "any",
  })
  async deleteBlog(@graphql.Args() args: DeleteBlogArgs): Promise<Blog | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Author, {
    nullable: true,
    name: "author",
  })
  @nestAccessControl.UseRoles({
    resource: "Author",
    action: "read",
    possession: "any",
  })
  async resolveFieldAuthor(
    @graphql.Parent() parent: Blog
  ): Promise<Author | null> {
    const result = await this.service.getAuthor(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Publication, {
    nullable: true,
    name: "publication",
  })
  @nestAccessControl.UseRoles({
    resource: "Publication",
    action: "read",
    possession: "any",
  })
  async resolveFieldPublication(
    @graphql.Parent() parent: Blog
  ): Promise<Publication | null> {
    const result = await this.service.getPublication(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
