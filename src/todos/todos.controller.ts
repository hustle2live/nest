import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TodoService } from './todos.service';
import { CreateTodoDTO, Todo, UpdateTodoDTO } from './index';
import { TodoControllerInterface } from './interfaces/todo-controller.interface';

@Controller('todos')
export class TodosController implements TodoControllerInterface {
  constructor(private readonly service: TodoService) {}

  @Get()
  async getTodos(@Query('userId') userId: number): Promise<Todo[]> {
    return await this.service.getAll(userId);
  }

  @Post()
  async addTodo(
    @Body() todoBody: CreateTodoDTO,
    @Query('userId') userId: number,
  ): Promise<Todo> {
    console.log('userId ' + userId);

    return await this.service.create(todoBody, Number(userId));
  }

  @Put(':id')
  async updateTodo(
    @Param('id') todoId: number,
    @Body() todoBody: UpdateTodoDTO,
  ): Promise<Todo> {
    return await this.service.update(todoId, todoBody);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') todoId: number): Promise<Todo> {
    return await this.service.delete(todoId);
  }
}
