import { Args, Query, Resolver } from '@nestjs/graphql';

import { ItemsService } from '../items.service';
import { Items } from '../models/item.collection.model';

@Resolver()
export class ItemsResolver {
  constructor(private itemService: ItemsService) {}

  @Query(() => Items)
  async Items(
    @Args('userId') userId: string,
    @Args('orderId') orderId: string,
  ) {
    var user = await this.itemService.getUser(userId);
    console.log('user: ', user);
    return user;
  }
}
