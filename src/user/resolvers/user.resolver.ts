import { User } from 'src/user/models/user.model';
import { OrderService } from 'src/order/order.service';
import { Resolver, ResolveField, Query, Args, Parent } from '@nestjs/graphql';
import { UserService } from '../user.service';
import { Orders } from 'src/order/models/orders.model';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private orderService: OrderService,
  ) {}

  @Query(() => User)
  async User(@Args('userId') userId: string) {
    return await this.userService.getUser(userId);
  }

  @ResolveField('orders', () => Orders)
  async Orders(
    @Args('userId') userId: string,
    @Args('orderId') orderId: string,
  ) {
    return await this.orderService.getOrders(userId);
  }
}
