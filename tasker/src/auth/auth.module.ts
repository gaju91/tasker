import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
        secret: 'token_secret',
        signOptions: { expiresIn: '600m' },  // Token expiration time
      }),
  ], 
   controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})

export class AuthModule {}
