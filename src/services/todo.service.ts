import { Injectable } from '@nestjs/common';
import { TodoType } from 'src/types/todo.type';



interface TodoServiceInterface {
  getAll(): Promise<TodoType[]>;
}

@Injectable()
class TodoService implements TodoServiceInterface {
  private readonly db: TodoType[] = database;

  async getAll(): Promise<TodoType[]> {
    return await this.db;
  }
}

export { TodoService };
