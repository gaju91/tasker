import { Injectable, Inject, InternalServerErrorException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class MicroserviceClientService {
    constructor(
        @Inject('USER_MICROSERVICE') private userClient: ClientProxy,
       // @Inject('TASK_MICROSERVICE') private taskClient: ClientProxy,
    ) { }

    private async exec<T>(client: ClientProxy, cmd: string, data: any): Promise<T> {
        const msRes = await firstValueFrom(client.send<T>({ cmd }, data));

        if (msRes && msRes['status'] === 'error') {
            throw new InternalServerErrorException(msRes['message']);
        }
        return msRes["data"];
    }

    // execTask<T>(cmd: string, data: any): Promise<T> {
    //     return this.exec<T>(this.taskClient, cmd, data);
    // }

    execUser<T>(cmd: string, data: any): Promise<T> {
        return this.exec<T>(this.userClient, cmd, data);
    }
}
