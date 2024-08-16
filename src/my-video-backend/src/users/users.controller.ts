import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UseGuards,
  ForbiddenException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserIdParam } from './dto/user-id.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/decorators/user.decorator';

interface ReqUser {
  sub: string;
  name: string;
  isActive: boolean;
}

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = await this.usersService.create(createUserDto);

    return user;
  }

  @Get(':id')
  async findOne(@Param() { id }: UserIdParam) {
    const user = await this.usersService.findOne({
      id,
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found.`);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(
    @User() reqUser: ReqUser,
    @Param() { id }: UserIdParam,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    if (reqUser.sub !== id) {
      throw new ForbiddenException(`User can only update you own user.`);
    }

    const user = await this.usersService.findOne({
      id,
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found.`);
    }

    return this.usersService.update({
      where: { id },
      data: updateUserDto,
    });
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@User() reqUser: ReqUser, @Param('id') id: string) {
    if (reqUser.sub !== id) {
      throw new ForbiddenException(`User can only delete you own user.`);
    }

    const user = await this.usersService.findOne({
      id,
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found.`);
    }

    await this.usersService.remove({ id });
  }
}
