/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { NewasdfghjklWhereUniqueInput } from "./NewasdfghjklWhereUniqueInput";
import { NewasdfghjklUpdateInput } from "./NewasdfghjklUpdateInput";

@ArgsType()
class UpdateNewasdfghjklArgs {
  @Field(() => NewasdfghjklWhereUniqueInput, { nullable: false })
  where!: NewasdfghjklWhereUniqueInput;
  @Field(() => NewasdfghjklUpdateInput, { nullable: false })
  data!: NewasdfghjklUpdateInput;
}

export { UpdateNewasdfghjklArgs as UpdateNewasdfghjklArgs };
