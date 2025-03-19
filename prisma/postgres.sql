



--  при створенні бд з нуля виколристовуй mpx prisma migrate dev --name init 

-- НЕ ПОТРІБНО СТВОРЮВАТИ ЦІ ТАБЛИЦІ ВРУЧНУ ДЛЯ POSTGRES, ВІН САМ ЇХ СТВОРИТЬ ! 

CREATE DATABASE nest_todos;
\connect nest_todos;



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

CREATE INDEX idx_user_id ON "Todo" ("userId");


-- Створення початкової міграції:

-- Якщо ви хочете зберегти дані в таблицях User та Todo, вам потрібно створити початкову міграцію, яка відображає поточну структуру бази даних.
-- Це дозволить Prisma Migrate дізнатися про існуючі таблиці та продовжити відстежувати зміни.
-- Видаліть існуючі таблиці User і Todo з бази даних.
-- Виконайте npx prisma migrate dev --name init для створення початкової міграції.
-- Ця команда створить таблиці на основі вашої schema.prisma і створить таблицю _prisma_migrations.

-- Виправлення розбіжностей:

-- Якщо ви хочете зберегти дані в таблицях User та Todo і не хочете використовувати prisma migrate reset, вам потрібно вручну виправити розбіжності між схемою бази даних і schema.prisma.
-- Переконайтеся, що типи даних, обмеження, індекси та значення за замовчуванням у базі даних відповідають тим, що визначені в schema.prisma.
-- Рекомендації:

-- Завжди використовуйте Prisma Migrate для управління змінами схеми бази даних.
-- Не створюйте таблиці вручну, якщо ви використовуєте Prisma Migrate.
-- Перед запуском npx prisma migrate dev переконайтеся, що schema.prisma відповідає вашій базі даних.
-- Висновок:

-- Найчастіше, найпростішим рішенням є використання npx prisma migrate reset якщо ви готові втратити дані. Якщо дані важливі, то потрібно створити початкову міграцію або вручну виправити розбіжності.