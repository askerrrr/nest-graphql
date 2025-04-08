import { Model } from 'mongoose';
import { User, UserDocument } from './schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserCollectionService {
  constructor(
    @InjectModel(User.name, 'main') private user: Model<UserDocument>,
  ) {}
  async getUser(userId: string) {
    var user = await this.user.findOne({ userId }).exec();

    return user;
  }
}
