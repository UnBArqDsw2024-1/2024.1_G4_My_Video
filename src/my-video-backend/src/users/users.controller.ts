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
  BadRequestException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { User } from 'src/decorators/user.decorator';
import { UuidParam } from 'src/shared/uuid-param.dto';

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
    const user = await this.usersService.findOne({
      email: createUserDto.email,
    });

    if (user) {
      throw new BadRequestException(
        `User with email ${createUserDto.email} already exists.`,
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...newUser } =
      await this.usersService.create(createUserDto);

    return newUser;
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'string' })
  async findOne(@Param() { id }: UuidParam) {
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
  @ApiParam({ name: 'id', type: 'string' })
  @Patch(':id')
  async update(
    @Param() { id }: UuidParam,
    @Body() updateUserDto: UpdateUserDto,
    @User() reqUser: ReqUser,
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

  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @ApiParam({ name: 'id', type: 'string' })
  @Delete(':id')
  async remove(@User() reqUser: ReqUser, @Param() { id }: UuidParam) {
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
