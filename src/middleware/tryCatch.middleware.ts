import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TryCatchMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('TryCatch MiddleWare');
      next();
    } catch (error) {
      const message: string =
        error instanceof Error
          ? error.message
          : ((error as string) ?? 'Unknown TryCatch error');
      //   : ((error as string) ?? 'Unknown error');

      throw new BadRequestException(message);
    }
  }
}
