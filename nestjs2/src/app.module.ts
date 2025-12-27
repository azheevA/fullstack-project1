import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DataModule } from './data/data.module';
import { RegistrationsModule } from './registration/registration.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const user = config.get<string>('DB_USER');
        const password = config.get<string>('DB_PASSWORD');
        const host = config.get<string>('DB_HOST');
        const db = config.get<string>('DB_NAME');

        return {
          uri: `mongodb+srv://${user}:${password}@${host}/${db}?retryWrites=true&w=majority`,
        };
      },
    }),
    DataModule,
    RegistrationsModule,
  ],
})
export class AppModule {}
