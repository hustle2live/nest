import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos.module';
import { CatsModule } from './cats.module';

@Module({
  imports: [TodosModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
