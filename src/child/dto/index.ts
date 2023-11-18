import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ChildDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  parentId: string;
}
