import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-db/prisma.service';
import {
  UserServiceInterface,
  User,
  UpdateUserDTO,
  CreateUserDTO,
  UserIncludesTodos,
} from './index';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async getOne(userId: number): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id: userId } });
  }

  async getOneWithTodos(userId: number): Promise<UserIncludesTodos> {
    return await this.prisma.user.findUnique({
      where: { id: userId },
      include: { Todo: true },
    });
  }

  async create(userBody: CreateUserDTO): Promise<User> {
    return await this.prisma.user.create({ data: userBody });
  }

  async update(userId: number, userBody: UpdateUserDTO): Promise<User> {
    return await this.prisma.user.update({
      data: userBody,
      where: { id: userId },
    });
  }

  async delete(userId: number): Promise<User> {
    return await this.prisma.user.delete({ where: { id: userId } });
  }
}
