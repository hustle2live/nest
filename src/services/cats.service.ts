import { Injectable } from '@nestjs/common';

interface Cat {
  name: string;
  age: number;
}

interface CatsServiceInterface {
  getAll(): Cat[];
}

@Injectable()
class CatsService implements CatsServiceInterface {
  private readonly db: Cat[] = [
    { name: 'Tom', age: 3 },
    { name: 'Jerry', age: 2 },
  ];

  public getAll(): Cat[] {
    return this.db;
  }
}

export { CatsService, type CatsServiceInterface, type Cat };
