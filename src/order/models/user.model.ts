import { Order } from './order.models';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  userId: string;

  @Field(() => [Order])
  orders: [Order];
}
