
-- CREATE DATABASE nest_todos;
-- \connect nest_todos;

CREATE TABLE "Todo" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" VARCHAR(100) NOT NULL,
    "text" VARCHAR(255),
    "userId" INTEGER NOT NULL,
    "isCompleted" BOOLEAN DEFAULT FALSE,
    "isPublic" BOOLEAN DEFAULT FALSE,
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE,
    CONSTRAINT fk_user_id FOREIGN KEY ("userId") REFERENCES "User"("id")
);

CREATE TABLE "User" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" VARCHAR(100) UNIQUE NOT NULL,
    "name" VARCHAR(50),
    "password" VARCHAR(255) NOT NULL,
    "isVerified" BOOLEAN DEFAULT FALSE,
    "verificationToken" VARCHAR(255),
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_user_id ON "Todo" ("userId");

CREATE UNIQUE INDEX idx_user_email ON "User" ("email");