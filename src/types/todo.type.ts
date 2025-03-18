export type TodoType = {
  text: string;
  title: string;
  userId: number;
  isCompleted: boolean;
  isPublic: boolean;
  createdAt: Date;
  updatedAt?: Date;
};

// Якщо ви отримуєте або надсилаєте дані через API, часто використовується формат ISO 8601 для представлення дат і часу. У цьому випадку ви можете використовувати тип string і перетворювати його на Date при необхідності.
