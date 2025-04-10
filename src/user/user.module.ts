import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { UserService } from './user.service';
import { OrderModule } from 'src/order/order.module';
import { UserResolver } from './resolvers/user.resolver';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [UserService, UserResolver],
  exports: [UserService, UserResolver],
  imports: [OrderModule, DatabaseModule],
})
export class UserModule {}
