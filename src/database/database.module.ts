import { Module } from '@nestjs/common';
import { UserCollectionService } from './user.collection/user.collection.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.collection/schemas/user.schema';
import { Orders, OrdersSchema } from './orderCollection/schemas/orders.schema';
import { OrdersCollectionService } from './orderCollection/order.collection.service';

@Module({
  providers: [UserCollectionService, OrdersCollectionService],
  exports: [UserCollectionService, OrdersCollectionService],
  imports: [
    MongooseModule.forFeature(
      [{ name: User.name, schema: UserSchema }],
      'main',
    ),
    MongooseModule.forFeature(
      [{ name: Orders.name, schema: OrdersSchema }],
      'main',
    ),
  ],
})
export class DatabaseModule {}
