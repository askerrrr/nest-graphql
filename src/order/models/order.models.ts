import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
class File {
  @Field()
  path: string;

  @Field()
  telegramApiFileUrl: string;
}

@ObjectType()
class OrderStatus {
  @Field(() => Int)
  id: number;

  @Field()
  value: string;
}

@ObjectType()
class Description {
  @Field()
  qty: string;
  @Field({ nullable: true })
  size?: string;
}

@ObjectType()
export class Order {
  @Field()
  id: string;

  @Field()
  userId: string;

  @Field()
  userName: string;

  @Field()
  firstName: string;

  @Field()
  type: string;

  @Field(() => OrderStatus)
  orderStatus: OrderStatus;

  @Field(() => File)
  file: File;

  @Field({ nullable: true })
  itemUrl?: string;

  @Field(() => Description, { nullable: true })
  description?: Description;
}
