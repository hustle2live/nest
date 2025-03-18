import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../src/controllers/app.controller';
import { AppService } from '../src/services/app.service';
import { TodosController } from '../src/controllers/todos.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController, TodosController],
      providers: [AppService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(AppController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('getTodos', () => {
    it('should return an array of todos', () => {
      const todoController = app.get(TodosController);
      expect(todoController.getAll()).toEqual(['todo1', 'todo2', 'todo3']);
    });
  });
});
