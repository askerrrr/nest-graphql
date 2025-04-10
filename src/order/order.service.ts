import { Injectable } from '@nestjs/common';
import { UserCollectionService } from '../database/user.collection/user.collection.service';
import { OrdersCollectionService } from 'src/database/order.collection/order.collection.service';

@Injectable()
export class OrderService {
  constructor(private orderCollection: OrdersCollectionService) {}

  async getOrder(userId: string, orderId: string) {
    return await this.orderCollection.getOrder(userId, orderId);
  }

  async getOrders(userId: string) {
    return await this.orderCollection.getOrders(userId);
  }
}
