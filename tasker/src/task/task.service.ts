import { Injectable, UnauthorizedException } from '@nestjs/common';
import { TASK_COMMAND } from '../common/constants/task-command.const';
import { TaskDto, CreateTaskDto, UpdateTaskDto, GetTasksDto, StartTaskDto, GetTaskDto } from '../dto/task.dto';
import { MicroserviceClientService } from '../common/shared/microservice-client.service';
import { UserType } from 'src/common/enums/user-type.enum';

@Injectable()
export class TaskService {
    constructor(
        private microserviceClientService: MicroserviceClientService
    ) { }


    createTask(data: CreateTaskDto): Promise<TaskDto> {
        return this.microserviceClientService.execTask(TASK_COMMAND.CREATE_TASK, data);
    }

    updateTask(data: UpdateTaskDto): Promise<TaskDto> {
        return this.microserviceClientService.execTask(TASK_COMMAND.UPDATE_TASK, data);
    }

    async startTask(data: StartTaskDto): Promise<TaskDto> {
        const task = await this.getTask({ _id: data._id });
        if(task.user !== data.userId && data.userType !== UserType.ADMIN) {
            throw new UnauthorizedException('You are not allowed to start this task');
        }

        return this.microserviceClientService.execTask(TASK_COMMAND.START_TASK, data);
    }

    async completeTask(data: StartTaskDto): Promise<TaskDto> {
        const task = await this.getTask({ _id: data._id });
        if(task.user !== data.userId && data.userType !== UserType.ADMIN) {
            throw new UnauthorizedException('You are not allowed to complete this task');
        }

        return this.microserviceClientService.execTask(TASK_COMMAND.COMPLETE_TASK, data);
    }

    getTasks(data: GetTasksDto): Promise<TaskDto[]> {
        return this.microserviceClientService.execTask(TASK_COMMAND.GET_TASKS, data);
    }

    getTask(data: GetTaskDto): Promise<TaskDto> {
        return this.microserviceClientService.execTask(TASK_COMMAND.GET_TASK, data);
    }

}
