import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import {
  CatsService,
  CatsServiceInterface,
  Cat,
} from 'src/services/cats.service';

@Controller('cats')
export class CatsController {
  service: CatsServiceInterface;

  constructor() {
    this.service = new CatsService();
  }

  @Get()
  findAll(@Req() request: Request): Cat[] {
    // const queryParams = request.query;
    return this.service.getAll();
  }
}
