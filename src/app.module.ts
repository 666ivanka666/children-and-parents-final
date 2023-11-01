import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParentController } from './parent/parent.controller';
import { ParentModule } from './parent/parent.module';
import { ChildService } from './child/child.service';
import { ChildModule } from './child/child.module';

@Module({
  imports: [ParentModule, ChildModule],
  controllers: [AppController, ParentController],
  providers: [AppService, ChildService],
})
export class AppModule {}
