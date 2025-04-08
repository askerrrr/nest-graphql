import { Injectable } from '@nestjs/common';
import { UserCollectionService } from '../database/user.collection/user.collection.service';

@Injectable()
export class OrderService {
  constructor(private userCollection: UserCollectionService) {}

  async getUser(userId: string) {
    return await this.userCollection.getUser(userId);
  }

  async getOrder(userId: string, orderId: string) {
    var user = await this.userCollection.getUser(userId);
    var { orders } = user;

    var order = orders.find((order) => order.id == orderId);

    return order;
  }

  async getOrders(userId: string) {
    var user = await this.userCollection.getUser(userId);
    var { orders } = user;

    return { orders };
  }
}
