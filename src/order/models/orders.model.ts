import { Field, ObjectType } from '@nestjs/graphql';
import { Order } from './order.models';

@ObjectType()
export class Orders {
  @Field(() => [Order])
  orders: Order
}
