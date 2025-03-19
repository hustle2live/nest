import { UpdateUserDTO, User, CreateUserDTO } from '../index';

export interface UserServiceInterface {
  getById: (userId: number) => Promise<User | null>;
  create: (userBody: CreateUserDTO) => Promise<User>;
  update: (userId: number, userBody: UpdateUserDTO) => Promise<User>;
  delete: (userId: number) => Promise<User>;
}
