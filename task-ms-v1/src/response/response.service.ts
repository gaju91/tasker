import { Injectable } from '@nestjs/common';
import { Response } from '../common/interfaces/response.interface';

@Injectable()
export class ResponseService {
  success<T>(data: T, message?: string): Response<T> {
    return {
      status: 'success',
      data: data,
      message: message,
    };
  }

  error<T>(message: string, data?: T): Response<T> {
    return {
      status: 'error',
      data: data,
      message: message,
    };
  }
}
