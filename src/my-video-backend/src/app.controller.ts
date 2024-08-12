import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './services/user.service';
import { User } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users/:id')
  async getUserById(@Param('id') id: string): Promise<User> {
    const user = await this.userService.user({ id: Number(id) });

    if (!user) throw new NotFoundException(`User with id ${id} not found.`);

    return user;
  }
}
