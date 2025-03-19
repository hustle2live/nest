import { User, CreateUserDTO, UpdateUserDTO } from '../index';
import { UserIncludesTodos } from './user.interface';

export interface UserControllerInterface {
  getUser: (
    userId: number,
    withTodos?: boolean,
  ) => Promise<User | UserIncludesTodos>;
  addUser: (userBody: CreateUserDTO) => Promise<User>;
  updateUser: (userId: number, userBody: UpdateUserDTO) => Promise<User>;
  deleteUser: (userId: number) => Promise<User>;
}
