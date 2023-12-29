import { Module, Global } from '@nestjs/common';
import { Transport, ClientsModule } from '@nestjs/microservices';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { MicroserviceClientService } from './microservice-client.service';

@Global()
@Module({
    imports: [
        ClientsModule.registerAsync([
            {
                name: 'USER_MICROSERVICE',
                imports: [ConfigModule],
                inject: [ConfigService],
                useFactory: (configService: ConfigService) => ({
                    transport: Transport.TCP,
                    options: {
                        host: configService.get<string>('USER_MICROSERVICE_HOST'),
                        port: configService.get<number>('USER_MICROSERVICE_PORT'),
                    },
                }),
            },
        ]),
    ],
    providers: [MicroserviceClientService],
    exports: [MicroserviceClientService],
})
export class SharedModule { }