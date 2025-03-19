import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from 'src/todos/todos.controller';
import { PrismaModule } from 'src/prisma-db/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AppController, TodosController],
  providers: [AppService],
})
export class AppModule {}
