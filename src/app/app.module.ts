import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'src/prisma-db/prisma.module';
import { TodosController } from 'src/todos/todos.controller';
import { UsersController } from 'src/users/users.controller';
import { TodoService } from 'src/todos/todos.service';
import { UserService } from 'src/users/users.service';

@Module({
  imports: [PrismaModule],
  controllers: [AppController, TodosController, UsersController],
  providers: [AppService, TodoService, UserService],
})

export class AppModule {}
