import { Todo } from 'src/todos/interfaces/todo.interface';

export interface User {
  id: number;
  email: string;
  name: string;
  password: string;
  isVerified: boolean;
  verificationToken: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserIncludesTodos extends User {
  Todo: Todo[];
}
