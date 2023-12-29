// src/auth/auth.service.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.userService.getUserLogin({ email });
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Create JWT payload and sign it
    const payload = { username: user.username, sub: user._id, type: user.type };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
