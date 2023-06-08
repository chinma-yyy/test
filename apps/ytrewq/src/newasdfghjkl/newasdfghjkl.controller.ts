import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NewasdfghjklService } from "./newasdfghjkl.service";
import { NewasdfghjklControllerBase } from "./base/newasdfghjkl.controller.base";

@swagger.ApiTags("newasdfghjkls")
@common.Controller("newasdfghjkls")
export class NewasdfghjklController extends NewasdfghjklControllerBase {
  constructor(
    protected readonly service: NewasdfghjklService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
