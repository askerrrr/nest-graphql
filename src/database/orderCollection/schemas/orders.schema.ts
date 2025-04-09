import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Order } from './order.schema';

export type OrdersDocument = HydratedDocument<Orders>;

@Schema({ _id: false })
export class Orders {
  @Prop()
  userId: string;

  @Prop(() => [Order])
  orders: Order[];
}

export var OrdersSchema = SchemaFactory.createForClass(Orders);
