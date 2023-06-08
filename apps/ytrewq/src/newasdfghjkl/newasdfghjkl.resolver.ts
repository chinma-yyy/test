import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { NewasdfghjklResolverBase } from "./base/newasdfghjkl.resolver.base";
import { Newasdfghjkl } from "./base/Newasdfghjkl";
import { NewasdfghjklService } from "./newasdfghjkl.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Newasdfghjkl)
export class NewasdfghjklResolver extends NewasdfghjklResolverBase {
  constructor(
    protected readonly service: NewasdfghjklService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
