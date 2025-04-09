import { Module } from '@nestjs/common';
import { UserResolver } from './resolvers/user.resolver';
import { OrderModule } from 'src/order/order.module';
import { UserService } from './user.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [UserService, UserResolver],
  exports: [UserService, UserResolver],
  imports: [OrderModule, DatabaseModule],
})
export class UserModule {}
