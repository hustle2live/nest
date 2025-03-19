export interface Todo {
  text: string;
  title: string;
  userId: number;
  isCompleted: boolean;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}
