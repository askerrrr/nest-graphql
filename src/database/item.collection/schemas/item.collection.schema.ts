import { HydratedDocument } from 'mongoose';
import { ItemData } from './itemData.schema';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
class Order {
  @Prop()
  id: string;

  @Prop()
  totalSum: string;

  @Prop({ type: [ItemData] })
  items: ItemData[]
}

@Schema({ _id: false })
export class Item {
  @Prop()
  userId: string;

  @Prop({ type: [Order] })
  orders: Order[];
}

export type ItemDocument = HydratedDocument<Item>;

export var ItemSchema = SchemaFactory.createForClass(Item);
