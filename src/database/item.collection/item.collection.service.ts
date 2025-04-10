import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item, ItemDocument } from './schemas/item.collection.schema';

@Injectable()
export class ItemCollectionService {
  constructor(
    @InjectModel(Item.name, 'main') private itemCollection: Model<ItemDocument>,
  ) {}

  async getUser(userId: string) {
    return await this.itemCollection.findOne({ userId }).exec();
  }

  async getOrder(userId: string, orderId: string) {
    var { orders } = await this.itemCollection.findOne({ userId }).exec();

    var order = orders.find((order) => order.id == orderId);

    return order;
  }

  async getOrders(userId: string) {
    var { orders } = await this.itemCollection.findOne({ userId }).exec();

    return orders;
  }

  async getItems(userId: string, orderId: string) {
    var { orders } = await this.itemCollection.findOne({ userId }).exec();

    var { items } = orders.find((order) => order.id == orderId);

    return items;
  }
}
