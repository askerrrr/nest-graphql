import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Description {
  @Field()
  qty: string;
  @Field({ nullable: true })
  size?: string;
}
