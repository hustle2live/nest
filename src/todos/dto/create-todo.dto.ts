export interface CreateTodoDTO {
  text: string;
  title: string;
  userId: number;
  isCompleted?: boolean;
  isPublic?: boolean;
}
