import { CreateTodoDTO, UpdateTodoDTO, Todo } from '../index';

export interface TodoServiceInterface {
  getAllShared(): Promise<Todo[]>;
  getAll(userId: number): Promise<Todo[]>;
  getOne(todoId: number): Promise<Todo>;
  create(todo: CreateTodoDTO, userId: number): Promise<Todo>;
  update(todoId: number, todoBody: UpdateTodoDTO): Promise<Todo>;
  delete(todoId: number): Promise<Todo>;
}
