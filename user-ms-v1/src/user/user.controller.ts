import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { USER_COMMAND } from 'src/common/constants/user-command.const';
import { UserService } from './user.service';
import { ResponseService } from 'src/response/response.service';
import { CreateUserDto, UpdateUserDto, GetUsersDto, GetUserDto, DeleteUserDto, GetUserLoginDto } from 'src/dto/user.dto';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
        private responseService: ResponseService
    ) {};

    @MessagePattern({ cmd: USER_COMMAND.CREATE_USER })
    async createUser(data: CreateUserDto) {
        try {
            const user = await this.userService.createUser(data);
            return this.responseService.success(user, 'User created successfully');
        } catch (error) {
            return this.responseService.error(error.message);
        }
    }

    @MessagePattern({ cmd: USER_COMMAND.UPDATE_USER })
    async updateUser(data: UpdateUserDto) {
        try {
            const updatedUser = await this.userService.updateUser(data);
            return this.responseService.success(updatedUser, 'User updated successfully');
        } catch (error) {
            return this.responseService.error(error.message);
        }
    }

    @MessagePattern({ cmd: USER_COMMAND.GET_USERS })
    async getUser(data: GetUsersDto) {
        try {
            const users = await this.userService.getAllUsers(data);
            return this.responseService.success(users, 'Users retrieved successfully');
        } catch (error) {
            return this.responseService.error(error.message);
        }
    }

    @MessagePattern({ cmd: USER_COMMAND.GET_USER })
    async getUserById(data: GetUserDto) {
        try {
            const user = await this.userService.getUserById(data);
            return this.responseService.success(user, 'User retrieved successfully');
        } catch (error) {
            return this.responseService.error(error.message);
        }
    }

    @MessagePattern({ cmd: USER_COMMAND.GET_USER_LOGIN })
    async getUserLogin(data: GetUserLoginDto) {
        try {
            const user = await this.userService.getUserLogin(data);
            return this.responseService.success(user, 'User retrieved successfully');
        } catch (error) {
            return this.responseService.error(error.message);
        }
    }

    @MessagePattern({ cmd: USER_COMMAND.DELETE_USER })
    async deleteUser(data: DeleteUserDto) {
        try {
            await this.userService.deleteUser(data);
            return this.responseService.success({}, 'User deleted successfully');
        } catch (error) {
            return this.responseService.error(error.message);
        }
    }
}
