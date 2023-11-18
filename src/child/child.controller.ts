import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ChildService } from './child.service';
import { ChildDto } from './dto';
import { Child } from './type';
import { IdDto, NameDto } from 'src/common/decorators';

@Controller('child')
export class ChildController {
  constructor(private readonly childService: ChildService) {}

  @Post()
  addChild(@Body() body: ChildDto): { id: string } {
    const generatedId = this.childService.insertChild(
      body.firstName,
      body.lastName,
      body.parentId,
    );
    return { id: generatedId };
  }

  @Get()
  getAllChild(): Child[] {
    return this.childService.getChild();
  }

  @Get(':id')
  getChildById(@Param() params: IdDto): Child {
    const { id } = params;
    return this.childService.getSingleChild(params.id);
  }

  @Get('name/:name')
  getChildByName(@Param() params: NameDto): Child[] {
    const { name } = params;
    return this.childService
      .getChild()
      .filter((child) => child.firstName === name);
  }

  @Put(':id')
  updateChild(@Param() params: IdDto, @Body() body: ChildDto): Child {
    const { id } = params;
    return this.childService.updateChild(
      id,
      body.firstName,
      body.lastName,
      body.parentId,
    );
  }

  @Delete(':id')
  deleteChildById(@Param() params: IdDto): { message: string } {
    return this.childService.deleteChild(params.id);
  }
}

export { ChildService };
