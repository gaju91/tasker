import { Type } from 'class-transformer';
import { IsInt, IsString, IsEmail, IsOptional, IsEnum } from 'class-validator';
import { UserType } from 'src/common/enums/user-type.enum';

export class CreateUserDto {
    @IsOptional()
    @IsString()
    _id?: string;

    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsEmail()
    email: string;

    @IsEnum(UserType)
    type: UserType;
}

export class UpdateUserDto {
    @IsString()
    _id?: string;

    @IsOptional()
    @IsString()
    username?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsEnum(UserType)
    type?: UserType;
}

export class GetUsersDto {
    @IsOptional()
    @IsString()
    username?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsEnum(UserType)
    type?: UserType;

    @IsOptional()
    @IsInt()
    @Type(() => Number)
    limit?: number;

    @IsOptional()
    @IsInt()
    @Type(() => Number)
    offset?: number;
}

export class GetUserDto {
    @IsString()
    _id: string;
}

export class GetUserLoginDto {
    @IsOptional()
    @IsString()
    username: string;

    @IsString()
    email: string;
}

export class DeleteUserDto {
    @IsString()
    _id: string;
}