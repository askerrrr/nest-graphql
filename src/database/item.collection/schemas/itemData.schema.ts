import { Schema, Prop } from '@nestjs/mongoose';

@Schema({ _id: false })
class Description {
  @Prop()
  qty: string;

  @Prop()
  size?: string;
}

@Schema({ _id: false })
export class ItemData {
  @Prop()
  id: string;

  @Prop()
  price: string;

  @Prop()
  purchased: number;

  @Prop()
  delivered: number;

  @Prop({ type: Description })
  description: Description;

  @Prop()
  url: string;
}
