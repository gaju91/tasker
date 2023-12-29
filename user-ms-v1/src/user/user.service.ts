import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto, GetUsersDto, GetUserDto, DeleteUserDto, GetUserLoginDto } from 'src/dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async createUser(data: CreateUserDto): Promise<User> {
    const newUser = await this.userModel.create(data);
    return this.getUserById({ _id: newUser._id });
  }

  async updateUser(data: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findByIdAndUpdate(data._id, data, { new: true }).exec();
    if (!user) {
      throw new Error('User not found');
    }
    
    return this.getUserById({ _id: data._id });
  }

  async getAllUsers(data: GetUsersDto): Promise<User[]> {
    const { limit = 10, offset = 0, ...rest } = data;
    return this.userModel.find(rest).select({ password: -1 }).skip(offset).limit(limit).exec();
  }

  async getUserById(data: GetUserDto): Promise<User> {
    const userId = new mongoose.Types.ObjectId(data._id); // Convert to ObjectId
    return this.userModel.findById(userId).select({ password: -1 }).exec();
  }

  async getUserLogin(data: GetUserLoginDto): Promise<User> {
    return this.userModel.findOne({
      $or: [
        { username: data.username },
        { email: data.email },
      ],
    }).exec();
  }

  async deleteUser(data: DeleteUserDto): Promise<void> {
    const user = await this.userModel.findByIdAndDelete(data._id).lean().exec();
    if (!user) {
      throw new Error('User not found');
    }
  }
}
