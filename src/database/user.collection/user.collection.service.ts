import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';

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
