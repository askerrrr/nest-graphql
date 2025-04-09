import { ObjectType, Field } from '@nestjs/graphql';
import { Orders } from 'src/order/models/orders.model';

@ObjectType()
export class User {
  @Field()
  userId: string;

  @Field()
  userName: string;

  @Field()
  firstName: string;

  @Field(() => [Orders])
  orders: Orders;
}
