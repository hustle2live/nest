import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-db/prisma.service';
import { Todo } from './interfaces/todo.interface';
import { TodoServiceInterface } from './interfaces/todo-service.interface';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { UpdateTodoDTO } from './dto/update-todo.dto';

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

  async create(todo: CreateTodoDTO): Promise<Todo> {
    return await this.prisma.todo.create({
      data: todo,
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

// GET ALL WITH PARAMS GENERIC

// async getAll(userId: number): Promise<Todo[]> {
//   return await this.prisma.todo.findMany({
//     where: { userId: userId },
//   });
// }
