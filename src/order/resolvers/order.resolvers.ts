import { OrderService } from '../order.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';
import { Order } from '../models/order.models';
import { Orders } from '../models/orders.model';

@Resolver()
export class OrderResolver {
  constructor(private orderService: OrderService) {}

  @Query(() => Order)
  async Order(@Args('userId') userId: string, @Args('id') id: string) {
    return await this.orderService.getOrder(userId, id);
  }

  @Query(() => User)
  async User(@Args('userId') userId: string) {
    return await this.orderService.getUser(userId);
  }

  @Query(() => Orders)
  async Orders(@Args('userId') userId: string) {
    return await this.orderService.getOrders(userId);
  }
}
