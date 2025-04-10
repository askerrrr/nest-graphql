import { Field, ObjectType } from '@nestjs/graphql';
import { ItemData } from './itemData.model';

@ObjectType()
class ItemOrder {
  @Field()
  id: string;

  @Field()
  totalSum: string;

  @Field(() => [ItemData])
  items: ItemData;
}

@ObjectType()
export class Items {
  @Field()
  userId: string;

  @Field(() => [ItemOrder])
  orders: [ItemOrder];
}
