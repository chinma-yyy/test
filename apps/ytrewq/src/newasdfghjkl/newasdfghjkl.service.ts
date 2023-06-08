import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NewasdfghjklServiceBase } from "./base/newasdfghjkl.service.base";

@Injectable()
export class NewasdfghjklService extends NewasdfghjklServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
