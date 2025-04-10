import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class User {
  @Prop()
  userId: string;

  @Prop()
  userName: string;

  @Prop()
  firstName: string;
}

export type UserDocument = HydratedDocument<User>;

export var UserSchema = SchemaFactory.createForClass(User);
