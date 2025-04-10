import { Injectable } from '@nestjs/common';
import { ItemCollectionService } from 'src/database/item.collection/item.collection.service';

@Injectable()
export class ItemsService {
  constructor(private itemCollection: ItemCollectionService) {}

  async getItems(userId: string, orderId: string) {
    return await this.itemCollection.getItems(userId, orderId);
  }

  async getUser(userId: string) {
    return await this.itemCollection.getUser(userId);
  }
}
