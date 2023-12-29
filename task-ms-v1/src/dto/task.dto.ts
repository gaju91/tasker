import { IsInt, IsString, IsMongoId, IsOptional, IsEnum, IsDate } from 'class-validator';
import { Priority } from 'src/common/enums/priority-type.enum';

export class CreateTaskDto {
    @IsOptional()
    @IsMongoId()
    _id?: string;

    @IsMongoId()
    user: string;

    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsEnum(Priority)
    priority: Priority;

    @IsDate()
    dueDate: Date;
}

export class UpdateTaskDto {
    @IsMongoId()
    _id?: string;

    @IsOptional()
    @IsMongoId()
    user?: string;

    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsEnum(Priority)
    priority?: Priority;

    @IsOptional()
    @IsDate()
    dueDate?: Date;
}
export class StartTaskDto {
    @IsMongoId()
    _id: string;
}

export class CompleteTaskDto {
    @IsMongoId()
    _id: string;
}

export class GetTasksDto {
    @IsOptional()
    @IsMongoId()
    user: string;

    @IsOptional()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsEnum(Priority)
    priority: Priority;

    @IsOptional()
    @IsDate()
    dueDate: Date;

    @IsOptional()
    @IsInt()
    limit: number;

    @IsOptional()
    @IsInt()
    offset: number;

    @IsOptional()
    @IsString()
    sortBy: string;

    @IsOptional()
    @IsString()
    sortDir: 'asc' | 'desc';
}

export class GetTaskDto {
    @IsMongoId()
    _id: string;
}

export class DeleteTaskDto {
    @IsMongoId()
    _id: string;
}
