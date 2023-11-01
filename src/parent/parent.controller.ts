import {Body,Controller,Delete,Get,Param, Post,Put,} from '@nestjs/common';
import { ParentService } from './parent.service';
import { ParentDto } from './dto';
import { IdDto, NameDto } from 'src/common/decorators';
import { Parent } from './type';
import { ChildService } from 'src/child/child.service';

@Controller('parent') 
export class ParentController {
  constructor(private readonly parentService: ParentService) {}

  @Post()
  addParent(@Body() body: ParentDto): { id: string } {
    const generatedId = this.parentService.insertParent(
      body.firstname,
      body.secondname,
      body.childId);
    return { id: generatedId };
  }

  @Get()
  getAllParent(): Parent[] {
    return this.parentService.getParent().filter((parent) => parent.active);
  }

  @Get(':id')
  getParentById(@Param() params: IdDto): Parent {
    const { id } = params
    return this.parentService.getSingleParent(id);
  }
  @Get('name/:name')
  getParentByName(@Param() params: NameDto): Parent[] {
    const { name } = params
    return this.parentService.getParent().filter((parent) => parent.name === name);
  }

  @Put(':id')
  updateParent(
    @Param() params: IdDto,
    @Body() body: ParentDto,
  ): Parent {
    const { id } = params
    return this.parentService.updateParent(id, body.firstname, body.secondname, body.childId);
  }


  @Delete(':id')
  deleteParentById(@Param() params: IdDto): 
    { message: string; } {
      return this.parentService.deleteParent(params.id);
    }
  }
  
