import { Module } from '@nestjs/common';
import { UserCollectionService } from './user.collection/user.collection.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.collection/schema';

@Module({
  providers: [UserCollectionService],
  exports: [UserCollectionService],
  imports: [
    MongooseModule.forFeature(
      [{ name: User.name, schema: UserSchema }],
      'main',
    ),
  ],
})
export class DatabaseModule {}
