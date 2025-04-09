import { Injectable } from '@nestjs/common';
import { OrdersCollectionService } from 'src/database/orderCollection/order.collection.service';
import { UserCollectionService } from 'src/database/user.collection/user.collection.service';

@Injectable()
export class UserService {
  constructor(
    private userCollection: UserCollectionService,
    private orderCollection: OrdersCollectionService,
  ) {}

  async getUser(userId: string) {
    return await this.userCollection.getUser(userId);
  }
}
