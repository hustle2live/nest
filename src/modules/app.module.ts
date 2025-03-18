import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { TodosController } from 'src/controllers/todos.controller';
import { CatsController } from 'src/controllers/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, TodosController, CatsController],
  providers: [AppService],
})
export class AppModule {}
