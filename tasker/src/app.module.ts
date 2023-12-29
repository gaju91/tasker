import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { SharedModule } from './common/shared/shared.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule, 
    TaskModule, 
    SharedModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
