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
    UseGuards
} from '@nestjs/common';
import { UserService } from './user.service';
import {
    CreateUserDto, GetUsersDto, UpdateUserDto,
} from '../dto/user.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserType } from 'src/common/enums/user-type.enum';
import { RolesGuard } from 'src/auth/guards/roles-guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Post('/')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserType.ADMIN)
    async createUser(@Body() data: CreateUserDto) {
        return this.userService.createUser(data);
    }

    @Get('/')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserType.ADMIN)
    async getUsers(@Query() query: GetUsersDto) {
        return this.userService.getAllUsers(query);
    }


    @Get('/profile')
    @UseGuards(JwtAuthGuard)
    async getProfile(@Req() req) {
        const userId = req.user.sub;
        return this.userService.getUserById({ _id: userId });
    }

    @Get('/:_id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserType.ADMIN)
    async getUserById(@Param('_id') _id: string) {
        return this.userService.getUserById({ _id });
    }

    @Put('/:_id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserType.ADMIN)
    async updateUser(@Param('_id') _id: string, @Body() data: UpdateUserDto) {
        return this.userService.updateUser({ ...data, _id });
    }

    @Delete('/:_id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserType.ADMIN)
    async deleteUser(@Param('_id') _id: string) {
        return this.userService.deleteUser({ _id });
    }
}
