import { CreateTodoDTO } from '../dto/create-todo.dto';
import { UpdateTodoDTO } from '../dto/update-todo.dto';
import { Todo } from './todo.interface';

export interface TodoServiceInterface {
  getAllShared(): Promise<Todo[]>;
  getAll(userId: number): Promise<Todo[]>;
  getOne(todoId: number): Promise<Todo>;
  create(todo: CreateTodoDTO): Promise<Todo>;
  update(todoId: number, todoBody: UpdateTodoDTO): Promise<Todo>;
  delete(todoId: number): Promise<Todo>;
}
