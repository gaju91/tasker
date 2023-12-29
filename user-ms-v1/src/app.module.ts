import { Module, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { validate } from './config/config.validation';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    UserModule,
    ConfigModule.forRoot({ validate }),
  ],
  controllers: [],
  providers: [],
})

export class AppModule implements OnModuleInit, OnModuleDestroy {
  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    await this.handleDatabaseConnection();
  }

  onModuleDestroy() {
    console.log('Application is closing...');
  }

  private async handleDatabaseConnection() {
    const mongooseConnection = mongoose.connection;
    mongooseConnection.on('connected', () => {
      console.log('Database connected successfully');
    });

    mongooseConnection.on('error', (error) => {
      console.error(`Database connection error: ${error}`);
    });

    mongooseConnection.on('disconnected', () => {
      console.warn('Database disconnected');
    });

    mongooseConnection.on('close', () => {
      console.log('Database connection closed');
    });
  }

}
