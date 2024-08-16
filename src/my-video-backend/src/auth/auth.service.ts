import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne({ email });

    if (!user) {
      throw new NotFoundException(`User with email ${email} not found.`);
    }

    const isPasswordCorrect = await this.usersService.isPasswordCorrect(
      password,
      user.password,
    );

    if (!isPasswordCorrect) {
      throw new NotFoundException(`User with email ${email} not found.`);
    }

    const payload = {
      sub: user.id,
      name: user.name,
      isActive: user.isActive,
      type: user.type,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
