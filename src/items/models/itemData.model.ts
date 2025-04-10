import { Description } from 'src/order/models/description.model';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ItemData {
  @Field()
  id: string;

  @Field()
  price: string;

  @Field(() => Int)
  purchased: number;

  @Field(() => Int)
  delivered: number;

  @Field(() => Description)
  description: Description;

  @Field()
  url: string;
}
