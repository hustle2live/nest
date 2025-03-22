import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'src/prisma-db/prisma.module';
import { TodosController } from 'src/todos/todos.controller';
import { UsersController } from 'src/users/users.controller';
import { TodoService } from 'src/todos/todos.service';
import { UserService } from 'src/users/users.service';
import { ValidationMiddleware } from 'src/middleware/validation.middleware';
import { CreateTodoDTO, UpdateTodoDTO } from 'src/todos';
import { CreateUserDTO, UpdateUserDTO } from 'src/users';

@Module({
  imports: [PrismaModule],
  controllers: [AppController, TodosController, UsersController],
  providers: [AppService, TodoService, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(async (req: Request, res: Response, next: NextFunction) => {
        const middleware = new ValidationMiddleware(
          CreateTodoDTO,
          UpdateTodoDTO,
        );
        await middleware.use(req, res, next);
      })
      .forRoutes(TodosController);
    consumer
      .apply(async (req: Request, res: Response, next: NextFunction) => {
        const middleware = new ValidationMiddleware(
          CreateUserDTO,
          UpdateUserDTO,
        );
        await middleware.use(req, res, next);
      })
      .forRoutes(UsersController);
  }
}
