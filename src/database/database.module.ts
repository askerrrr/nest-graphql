import { Module } from '@nestjs/common';
import { UserCollectionService } from './user.collection/user.collection.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.collection/schemas/user.schema';
import { Orders, OrdersSchema } from './order.collection/schemas/orders.schema';
import { OrdersCollectionService } from './order.collection/order.collection.service';
import {
  Item,
  ItemSchema,
} from './item.collection/schemas/item.collection.schema';
import { ItemCollectionService } from './item.collection/item.collection.service';

@Module({
  providers: [
    UserCollectionService,
    OrdersCollectionService,
    ItemCollectionService,
  ],
  exports: [
    UserCollectionService,
    OrdersCollectionService,
    ItemCollectionService,
  ],
  imports: [
    MongooseModule.forFeature(
      [{ name: User.name, schema: UserSchema }],
      'main',
    ),
    MongooseModule.forFeature(
      [{ name: Orders.name, schema: OrdersSchema }],
      'main',
    ),
    MongooseModule.forFeature(
      [{ name: Item.name, schema: ItemSchema }],
      'main',
    ),
  ],
})
export class DatabaseModule {}
