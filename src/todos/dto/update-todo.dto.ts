import { IsBoolean, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateTodoDTO {
  @IsString()
  @MinLength(1)
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  text?: string;

  @IsBoolean()
  @IsOptional()
  isCompleted?: boolean;

  @IsBoolean()
  @IsOptional()
  isPublic?: boolean;
}
