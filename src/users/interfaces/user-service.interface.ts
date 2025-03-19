import { UpdateUserDTO, User, CreateUserDTO } from '../index';
import { UserIncludesTodos } from './user.interface';

export interface UserServiceInterface {
  getAll: () => Promise<User[]>;
  getOne: (userId: number) => Promise<User>;
  getOneWithTodos: (userId: number) => Promise<UserIncludesTodos>;
  create: (userBody: CreateUserDTO) => Promise<User>;
  update: (userId: number, userBody: UpdateUserDTO) => Promise<User>;
  delete: (userId: number) => Promise<User>;
}
