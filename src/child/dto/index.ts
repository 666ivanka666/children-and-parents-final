import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class ChildDto {
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  parentId: string;
 

}
