import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ _id: false })
class File {
  @Prop()
  path: string;
  @Prop()
  telegramApiFileUrl: string;
}

@Schema({ _id: false })
class Description {
  @Prop()
  qty: string;

  @Prop()
  size?: string;
}

@Schema({ _id: false })
class OrderStatus {
  @Prop()
  id: number;

  @Prop()
  value: string;
}

@Schema({ _id: false })
export class Order {
  @Prop()
  id: string;

  @Prop()
  userId: string;

  @Prop()
  userName: string;

  @Prop()
  firstName: string;

  @Prop()
  date: string;

  @Prop()
  phone: string;

  @Prop()
  type: 'multiple' | 'single';

  @Prop({ type: OrderStatus })
  orderStatus: OrderStatus;

  @Prop({ type: File })
  file: File;

  @Prop()
  itemUrl?: string;

  @Prop({ type: Description })
  description?: Description;
}

export var OrderSchema = SchemaFactory.createForClass(Order);
