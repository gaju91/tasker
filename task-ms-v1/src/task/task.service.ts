import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { 
  CreateTaskDto,
  UpdateTaskDto,
  CompleteTaskDto,
  GetTasksDto,
  GetTaskDto,
  DeleteTaskDto,
  StartTaskDto,
} from 'src/dto/task.dto';
import { Task } from './task.entity';
import { Status } from 'src/common/enums/status-type.enum';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private taskModel: Model<Task>) {}

  async createTask(data: CreateTaskDto): Promise<Task> {
    const newTask = await this.taskModel.create(data);
    return this.getTaskById({ _id: newTask._id });
  }

  async updateTask(data: UpdateTaskDto): Promise<Task> {
    const task = await this.taskModel.findByIdAndUpdate(data._id, data, { new: true }).exec();
    if (!task) {
      throw new Error('Task not found');
    }
    
    return this.getTaskById({ _id: data._id });
  }

  async startTask(data: StartTaskDto): Promise<Task> {
    const task = await this.taskModel.findByIdAndUpdate(data._id, { status: Status.IN_PROGRESS }, { new: true }).exec();
    if (!task) {
      throw new Error('Task not found');
    }

    return this.getTaskById({ _id: data._id });
  }

  async completeTask(data: CompleteTaskDto): Promise<Task> {
    const task = await this.taskModel.findByIdAndUpdate(data._id, { status: Status.DONE }, { new: true }).exec();
    if (!task) {
      throw new Error('Task not found');
    }
    
    return this.getTaskById({ _id: data._id });
  }

  async getTasks(data: GetTasksDto): Promise<Task[]> {
    const { 
      limit = 10, 
      offset = 0, 
      sortBy = 'createdAt',
      sortDir = 'desc', 
      ...rest 
    } = data;

    return this.taskModel.find(rest).sort({ [sortBy]: sortDir }).skip(offset).limit(limit).lean().exec();
  }

  async getTaskById(data: GetTaskDto): Promise<Task> {
    const taskId = new mongoose.Types.ObjectId(data._id); // Convert to ObjectId
    return this.taskModel.findById(taskId).exec();
  }

  async deleteTask(data: DeleteTaskDto): Promise<void> {
    const taskId = new mongoose.Types.ObjectId(data._id); // Convert to ObjectId
    const task = await this.taskModel.findByIdAndDelete(taskId).lean().exec();
    if (!task) {
      throw new Error('Task not found');
    }
  }
}
