import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { OrderService } from './order.service';
import { OrderResolver } from './resolvers/order.resolvers';

@Module({
  exports: [OrderService, OrderResolver],
  providers: [OrderService, OrderResolver],
  imports: [DatabaseModule],
})
export class OrderModule {}
