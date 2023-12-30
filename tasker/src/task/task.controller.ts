import { 
    Controller,
    Get,
    Req,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Query,
    UseGuards,
    Patch
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserType } from '../common/enums/user-type.enum';
import { RolesGuard } from '../auth/guards/roles-guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateTaskDto, GetTaskDto, GetTasksDto, UpdateTaskDto } from '../dto/task.dto';

@Controller('task')
export class TaskController {
    constructor(
        private readonly taskService: TaskService
    ) {}

    @Post('/')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserType.ADMIN)
    async createUser(@Body() data: CreateTaskDto) {
        return this.taskService.createTask(data);
    }

    @Get('/')
    @UseGuards(JwtAuthGuard)
    async getTasks(@Query() query: GetTasksDto, @Req() req) {
        const userId = req.user.sub;
        const userType = req.user.type;

        if (userType !== UserType.ADMIN) {
            query.user = userId;
        }

        return this.taskService.getTasks(query);
    }

    @Patch('/:_id/start')
    @UseGuards(JwtAuthGuard)
    async startTask(@Param('_id') _id: string, @Req() req) {
        const userId = req.user.sub;
        const userType = req.user.type;
        return this.taskService.startTask({ _id, userId, userType });
    }

    @Patch('/:_id/complete')
    @UseGuards(JwtAuthGuard)
    async completeTask(@Param('_id') _id: string, @Req() req) {
        const userId = req.user.sub;
        const userType = req.user.type;
        return this.taskService.completeTask({ _id, userId, userType });
    }

    @Put('/:_id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserType.ADMIN)
    async updateUser(@Param('_id') _id: string, @Body() data: UpdateTaskDto) {
        return this.taskService.updateTask({ ...data, _id });
    }

    // @Delete('/:_id')
    // @UseGuards(JwtAuthGuard, RolesGuard)
    // @Roles(UserType.ADMIN)
    // async deleteUser(@Param('_id') _id: string) {
    //     return this.userService.deleteUser({ _id });
    // }
}
