import { Todo, CreateTodoDTO, UpdateTodoDTO } from '../index';

export interface TodoControllerInterface {
  getTodos: (userId: number) => Promise<Todo[]>;
  addTodo: (todoBody: CreateTodoDTO) => Promise<Todo>;
  updateTodo: (todoId: number, todoBody: UpdateTodoDTO) => Promise<Todo>;
  deleteTodo: (todoId: number) => Promise<Todo>;
}
