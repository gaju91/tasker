// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

(async function() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const configService = appContext.get(ConfigService);

  const host = configService.get<string>('HOST', 'localhost');
  const port = configService.get<number>('PORT', 3001);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: {
      host,
      port,
    },
  });

  await app.listen();
  console.log(`User Microservice is listening on ${host}:${port}`);
})();
