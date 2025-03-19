-- AlterTable
ALTER TABLE "Todo" ALTER COLUMN "isCompleted" SET DEFAULT false,
ALTER COLUMN "isPublic" SET DEFAULT false;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isVerified" SET DEFAULT false;
