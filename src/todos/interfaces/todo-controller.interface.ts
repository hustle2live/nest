import { Response } from 'express';
import { CreateTodoDTO, UpdateTodoDTO } from '../index';

export interface TodoControllerInterface {
  getTodos: (userId: number, res: Response) => Promise<Response>;
  addTodo: (
    todoBody: CreateTodoDTO,
    res: Response,
    userId: number,
  ) => Promise<Response>;
  updateTodo: (
    todoId: number,
    todoBody: UpdateTodoDTO,
    res: Response,
  ) => Promise<Response>;
  deleteTodo: (todoId: number, res: Response) => Promise<Response>;
  getTodoById: (userId: number, res: Response) => Promise<Response>;
}
