import { IsNotEmpty, IsString } from 'class-validator';

export class ParentDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;
}
