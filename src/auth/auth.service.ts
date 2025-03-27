import crypto from 'node:crypto';
import { sign } from 'jsonwebtoken';

import * as bcrypt from 'bcrypt';

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-db/prisma.service';
import { User } from 'src/users';

const AuthorizationKeys = {
  ExpirationAge: 86_400,
  SaltNumber: 10,
  SecretKey: 'new-nest-project-secure-kaslhf%swd$62jk-key',
} as const;

interface AuthServiceInterface {
  generateJWT: (userId: string) => string;
  createUserAuthToken: () => string;
}

@Injectable()
export class AuthService implements AuthServiceInterface {
  constructor(private readonly prisma: PrismaService) {}

  generateJWT(userId: string): string {
    const { ExpirationAge, SecretKey } = AuthorizationKeys;
    return sign({ id: userId }, SecretKey, {
      expiresIn: ExpirationAge,
    }) as string;
  }

  createUserAuthToken(): string {
    return crypto.randomBytes(32).toString('hex');
  }
}
