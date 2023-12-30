import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { USER_COMMAND } from 'src/common/constants/user-command.const';
import { UserDto, CreateUserDto, DeleteUserDto, GetUserDto, GetUserLoginDto, GetUsersDto, UpdateUserDto } from '../dto/user.dto';
import { UserType } from 'src/common/enums/user-type.enum';
import { MicroserviceClientService } from 'src/common/shared/microservice-client.service';
import { config } from 'process';

@Injectable()
export class UserService implements OnModuleInit {
    constructor(
        @Inject(ConfigService) private readonly configService: ConfigService,
        private microserviceClientService: MicroserviceClientService
    ) { }

    async onModuleInit() {
        await this.bootstrapAdminUser();
    }

    private async bootstrapAdminUser() {
        const adminEmail = this.configService.get('DEFAULT_ADMIN_EMAIL');
        const existingAdmin = await this.getUserLogin({ email: adminEmail });
        if (!existingAdmin) {
            const adminUser: CreateUserDto = {
                username: this.configService.get('DEFAULT_ADMIN_USERNAME'),
                email: adminEmail,
                type: UserType.ADMIN,
                // Set a default admin password (consider hashing it)
                password: this.configService.get('DEFAULT_ADMIN_PASSWORD'),
            };
            await this.createUser(adminUser);
            console.log('Admin user created');
        }
    }

    createUser(data: CreateUserDto): Promise<UserDto> {
        return this.microserviceClientService.execUser(USER_COMMAND.CREATE_USER, data);
    }

    updateUser(data: UpdateUserDto): Promise<UserDto> {
        return this.microserviceClientService.execUser(USER_COMMAND.UPDATE_USER, data);
    }

    getUserById(data: GetUserDto): Promise<UserDto> {
        return this.microserviceClientService.execUser(USER_COMMAND.GET_USER, data);
    }

    getAllUsers(data: GetUsersDto): Promise<UserDto[]> {
        return this.microserviceClientService.execUser(USER_COMMAND.GET_USERS, data);
    }

    getUserLogin(data: GetUserLoginDto): Promise<UserDto> {
        return this.microserviceClientService.execUser(USER_COMMAND.GET_USER_LOGIN, data);
    }

    deleteUser(data: DeleteUserDto): Promise<void> {
        return this.microserviceClientService.execUser(USER_COMMAND.DELETE_USER, data);
    }
}
