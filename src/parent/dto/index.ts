import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ParentDto {
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsString()
  @IsNotEmpty()
  secondname: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  childId: string;


}
