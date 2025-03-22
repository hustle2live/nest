import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { TodoService } from './todos.service';
import { CreateTodoDTO, UpdateTodoDTO } from './index';
import { TodoControllerInterface } from './interfaces/todo-controller.interface';
import { Response } from 'express';

@Controller('todos')
export class TodosController implements TodoControllerInterface {
  constructor(private readonly service: TodoService) {}

  @Get()
  async getTodos(
    @Query('userId') userId: number,
    @Res() res: Response,
  ): Promise<Response> {
    const data = await this.service.getAll(userId);
    return res.status(HttpStatus.OK).send(data);
  }

  @Post()
  async addTodo(
    @Body() todoBody: CreateTodoDTO,
    @Res() res: Response,
    @Query('userId') userId: number,
  ): Promise<Response> {
    if (!userId) {
      throw new BadRequestException('User Id is required');
    }

    try {
      const newTodo = await this.service.create(todoBody, Number(userId));
      return res.status(HttpStatus.CREATED).send({ newTodo });
    } catch (error: unknown) {
      const message: string =
        error instanceof Error
          ? error.message
          : ((error as string) ?? 'Unknown error');

      throw new BadRequestException(message);
    }
  }

  @Put(':id')
  async updateTodo(
    @Param('id') todoId: number,
    @Body() todoBody: UpdateTodoDTO,
    @Res() res: Response,
  ): Promise<Response> {
    const data = await this.service.update(Number(todoId), todoBody);
    return res.status(HttpStatus.OK).send(data);
  }

  @Delete(':id')
  async deleteTodo(
    @Param('id') todoId: number,
    @Res() res: Response,
  ): Promise<Response> {
    const data = await this.service.delete(todoId);
    return res.status(HttpStatus.OK).send(data);
  }
}
