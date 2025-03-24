import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { UserService } from './users.service';
import { UserControllerInterface } from './interfaces/user-controller.interface';
import { CreateUserDTO, UpdateUserDTO, User, UserIncludesTodos } from './index';

@Controller('users')
export class UsersController implements UserControllerInterface {
  constructor(private readonly service: UserService) {}

  @Get(':id')
  async getUserById(
    @Param('id') userId: number,
    @Query('includeTodos') withTodos: boolean = false,
  ): Promise<User | UserIncludesTodos> {
    if (withTodos) {
      return await this.service.getOneWithTodos(userId);
    }
    return await this.service.getOne(userId);
  }

  @Post()
  async addUser(@Body() userBody: CreateUserDTO): Promise<User> {
    return await this.service.create(userBody);
  }

  @Put(':id')
  async updateUser(
    @Param('id') userId: number,
    @Body() userBody: UpdateUserDTO,
  ): Promise<User> {
    return await this.service.update(Number(userId), userBody);
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: number): Promise<User> {
    return await this.service.delete(userId);
  }
}
