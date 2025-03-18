import { Controller, Get } from '@nestjs/common';

@Controller('todos')
export class TodosController {
  @Get()
  getAll(): string[] {
    return ['todo1', 'todo2', 'todo3'];
  }
}
