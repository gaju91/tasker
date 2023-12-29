import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { ResponseService } from '../response/response.service';
import { TaskSchema } from './task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Task', schema: TaskSchema }
    ])
  ],
  providers: [TaskService, ResponseService],
  controllers: [TaskController]
})
export class TaskModule {}
