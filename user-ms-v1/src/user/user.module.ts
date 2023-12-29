import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ResponseService } from '../response/response.service';
import { UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema }
    ])
  ],
  providers: [UserService, ResponseService],
  controllers: [UserController]
})
export class UserModule {}
