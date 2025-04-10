import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Orders, OrdersDocument } from './schemas/orders.schema';

@Injectable()
export class OrdersCollectionService {
  constructor(
    @InjectModel(Orders.name, 'main') private order: Model<OrdersDocument>,
  ) {}

  async getOrders(userId: string) {
    var user = await this.order.findOne({ userId }).exec();
    var orders = user;
    return orders;
  }

  async getOrder(userId: string, orderId: string) {
    var user = await this.order.findOne({ userId }).exec();
    var { orders }: any = user;

    var order = orders.find((order) => order.id == orderId);
    return order;
  }
}
