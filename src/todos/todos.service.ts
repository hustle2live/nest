import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-db/prisma.service';
import {
  UpdateTodoDTO,
  CreateTodoDTO,
  Todo,
  TodoServiceInterface,
} from './index';

@Injectable()
export class TodoService implements TodoServiceInterface {
  constructor(private readonly prisma: PrismaService) {}

  async getAllShared(): Promise<Todo[]> {
    return await this.prisma.todo.findMany({
      where: { isPublic: true },
    });
  }

  async getAll(userId: number): Promise<Todo[]> {
    return await this.prisma.todo.findMany({
      where: { userId: userId },
    });
  }

  async create(todo: CreateTodoDTO, userId: number): Promise<Todo> {
    return await this.prisma.todo.create({
      data: {
        ...todo,
        user: { connect: { id: userId } },
      },
    });
  }

  async getOne(todoId: number): Promise<Todo> {
    return this.prisma.todo.findUnique({ where: { id: todoId } });
  }

  async update(todoId: number, todoBody: UpdateTodoDTO): Promise<Todo> {
    return await this.prisma.todo.update({
      data: todoBody,
      where: { id: todoId },
    });
  }

  async delete(todoId: number): Promise<Todo> {
    return await this.prisma.todo.delete({ where: { id: todoId } });
  }
}
