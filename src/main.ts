import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app/app.module';

const port = process.env.PORT ?? 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  app.useGlobalPipes(new ValidationPipe());
  console.log(`Server is running on: http://localhost:${port}`);
}
bootstrap();
