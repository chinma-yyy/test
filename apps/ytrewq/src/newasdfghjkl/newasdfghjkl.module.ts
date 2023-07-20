import { Module } from "@nestjs/common";
import { NewasdfghjklModuleBase } from "./base/newasdfghjkl.module.base";
import { NewasdfghjklService } from "./newasdfghjkl.service";
import { NewasdfghjklController } from "./newasdfghjkl.controller";
import { NewasdfghjklResolver } from "./newasdfghjkl.resolver";

@Module({
  imports: [NewasdfghjklModuleBase],
  controllers: [NewasdfghjklController],
  providers: [NewasdfghjklService, NewasdfghjklResolver],
  exports: [NewasdfghjklService],
})
export class NewasdfghjklModule {}
