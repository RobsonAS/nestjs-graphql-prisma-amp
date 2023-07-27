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
import { CreatePublicationArgs } from "./CreatePublicationArgs";
import { UpdatePublicationArgs } from "./UpdatePublicationArgs";
import { DeletePublicationArgs } from "./DeletePublicationArgs";
import { PublicationCountArgs } from "./PublicationCountArgs";
import { PublicationFindManyArgs } from "./PublicationFindManyArgs";
import { PublicationFindUniqueArgs } from "./PublicationFindUniqueArgs";
import { Publication } from "./Publication";
import { BlogFindManyArgs } from "../../blog/base/BlogFindManyArgs";
import { Blog } from "../../blog/base/Blog";
import { PublicationService } from "../publication.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Publication)
export class PublicationResolverBase {
  constructor(
    protected readonly service: PublicationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Publication",
    action: "read",
    possession: "any",
  })
  async _publicationsMeta(
    @graphql.Args() args: PublicationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Publication])
  @nestAccessControl.UseRoles({
    resource: "Publication",
    action: "read",
    possession: "any",
  })
  async publications(
    @graphql.Args() args: PublicationFindManyArgs
  ): Promise<Publication[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Publication, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Publication",
    action: "read",
    possession: "own",
  })
  async publication(
    @graphql.Args() args: PublicationFindUniqueArgs
  ): Promise<Publication | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Publication)
  @nestAccessControl.UseRoles({
    resource: "Publication",
    action: "create",
    possession: "any",
  })
  async createPublication(
    @graphql.Args() args: CreatePublicationArgs
  ): Promise<Publication> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Publication)
  @nestAccessControl.UseRoles({
    resource: "Publication",
    action: "update",
    possession: "any",
  })
  async updatePublication(
    @graphql.Args() args: UpdatePublicationArgs
  ): Promise<Publication | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Publication)
  @nestAccessControl.UseRoles({
    resource: "Publication",
    action: "delete",
    possession: "any",
  })
  async deletePublication(
    @graphql.Args() args: DeletePublicationArgs
  ): Promise<Publication | null> {
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
  @graphql.ResolveField(() => [Blog], { name: "blogs" })
  @nestAccessControl.UseRoles({
    resource: "Blog",
    action: "read",
    possession: "any",
  })
  async resolveFieldBlogs(
    @graphql.Parent() parent: Publication,
    @graphql.Args() args: BlogFindManyArgs
  ): Promise<Blog[]> {
    const results = await this.service.findBlogs(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
