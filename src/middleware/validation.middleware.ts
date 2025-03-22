import { BadRequestException, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { validate, ValidationError } from 'class-validator';
import { ClassConstructor, plainToClass } from 'class-transformer';

// @Injectable() is redundant - because of constructor and using with new CLASS () keqword in App consumer...
export class ValidationMiddleware<C, U> implements NestMiddleware {
  createDTO: ClassConstructor<C>;
  updateDTO: ClassConstructor<U>;

  constructor(
    createClassDTO: ClassConstructor<C>,
    updateClassDTO: ClassConstructor<U>,
  ) {
    this.createDTO = createClassDTO;
    this.updateDTO = updateClassDTO;
  }

  async use(req: Request<C | U>, res: Response, next: NextFunction) {
    try {
      if (req.method === 'POST') {
        console.log('POST middleware');
        await this.validateByClass(this.createDTO, req.body);
      } else if (req.method === 'PUT') {
        console.log('PUT middleware');
        await this.validateByClass(this.updateDTO, req.body);
      }

      next();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : (error as string);
      throw new BadRequestException('Invalid request body. ' + message);
    }
  }

  async validateByClass<T, G>(cls: ClassConstructor<T>, reqBody: G) {
    const todoData: T | T[] = plainToClass<T, G>(cls, reqBody);

    const errors = await validate(todoData as object | T[]);

    if (errors.length > 0) {
      const errorsSTR = errors
        .map(({ constraints }: ValidationError) => {
          let stringErrors = '';
          Object.values(constraints as { [s: string]: string }).forEach(
            (el) => (stringErrors += el),
          );
          return stringErrors;
        })
        .join('; ');

      throw new BadRequestException(errorsSTR);
    }
  }
}
