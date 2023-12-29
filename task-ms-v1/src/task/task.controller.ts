import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { TASK_COMMAND } from 'src/common/constants/task-command.const';
import { TaskService } from './task.service';
import { ResponseService } from 'src/response/response.service';
import {
    CreateTaskDto,
    UpdateTaskDto,
    CompleteTaskDto,
    GetTasksDto,
    GetTaskDto,
    DeleteTaskDto,
    StartTaskDto,
} from 'src/dto/task.dto';

@Controller('task')
export class TaskController {
    constructor(
        private taskService: TaskService,
        private responseService: ResponseService
    ) { };

    @MessagePattern({ cmd: TASK_COMMAND.CREATE_TASK })
    async createTask(data: CreateTaskDto) {
        try {
            const task = await this.taskService.createTask(data);
            return this.responseService.success(task, 'Task created successfully');
        } catch (error) {
            return this.responseService.error(error.message);
        }
    }

    @MessagePattern({ cmd: TASK_COMMAND.UPDATE_TASK })
    async updateTask(data: UpdateTaskDto) {
        try {
            const task = await this.taskService.updateTask(data);
            return this.responseService.success(task, 'Task updated successfully');
        } catch (error) {
            return this.responseService.error(error.message);
        }
    }

    @MessagePattern({ cmd: TASK_COMMAND.START_TASK })
    async startTask(data: StartTaskDto) {
        try {
            const task = await this.taskService.startTask(data);
            return this.responseService.success(task, 'Task started successfully');
        } catch (error) {
            return this.responseService.error(error.message);
        }
    }

    @MessagePattern({ cmd: TASK_COMMAND.COMPLETE_TASK })
    async completeTask(data: CompleteTaskDto) {
        try {
            const task = await this.taskService.completeTask(data);
            return this.responseService.success(task, 'Task completed successfully');
        } catch (error) {
            return this.responseService.error(error.message);
        }
    }

    @MessagePattern({ cmd: TASK_COMMAND.GET_TASKS })
    async getTasks(data: GetTasksDto) {
        try {
            const tasks = await this.taskService.getTasks(data);
            return this.responseService.success(tasks, 'Task retrieved successfully');
        } catch (error) {
            return this.responseService.error(error.message);
        }
    }

    @MessagePattern({ cmd: TASK_COMMAND.GET_TASK })
    async getTaskById(data: GetTaskDto) {
        try {
            const task = await this.taskService.getTaskById(data);
            return this.responseService.success(task, 'Task retrieved successfully');
        } catch (error) {
            return this.responseService.error(error.message);
        }
    }

    @MessagePattern({ cmd: TASK_COMMAND.DELETE_TASK })
    async deleteTask(data: DeleteTaskDto) {
        try {
            await this.taskService.deleteTask(data);
            return this.responseService.success({}, 'Task deleted successfully');
        } catch (error) {
            return this.responseService.error(error.message);
        }
    }
}
