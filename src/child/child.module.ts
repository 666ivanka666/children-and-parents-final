import { Module } from '@nestjs/common';
import { ChildController } from './child.controller';
import { ChildService } from './child.controller';
import { ParentModule } from 'src/parent/parent.module';



@Module({
  imports: [ParentModule],
  controllers: [ChildController],
  providers: [ChildService],
})

export class ChildModule {}

