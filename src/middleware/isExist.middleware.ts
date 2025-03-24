import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from 'src/prisma-db/prisma.service';
import { Todo } from 'src/todos';
import { User } from 'src/users';

@Injectable()
export class IsExistMiddleware implements NestMiddleware {
  constructor(private readonly prisma: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const requestId = Number(req.params.id);

    console.log('isExistMiddleware...');
    let record: Todo | User | null;

    if (req.baseUrl.includes('todos')) {
      record = await this.prisma.todo.findUnique({
        where: { id: requestId },
      });
    } else if (req.baseUrl.includes('users')) {
      record = await this.prisma.user.findUnique({
        where: { id: requestId },
      });
    }

    console.log('baseUrl: ', req.baseUrl);
    console.log(record);

    if (!record) {
      console.dir('__________record not found_________________');
      throw new NotFoundException('Record id is not defined');
    }

    console.dir('_____________next______________');
    next();
  }
}
