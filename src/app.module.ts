import { LogMiddleware } from './middlewares/log.middleware';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { configService } from "./config/config.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UserEntity } from "./entities/user.entity";
import { HouseEntity } from "./entities/house.entity";
import { AppJapanService } from "./app.japan.service";
import { AppDummy } from "./app.dummy";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres' as 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get('DB_USER_NAME', 'postgres'),
        database: configService.get('DB_NAME', 'nest'),
        password: configService.get('DB_PASSWORD', 'postgres'),
        synchronize: configService.get('DB_SYNCHRONIZE', 1),
        entities: [
          UserEntity,
          HouseEntity
        ],
        logging:configService.get('DB_LOGGING', 1),

      }),
    }),    ConfigModule.forRoot({
      isGlobal: true
    }),

    TypeOrmModule.forFeature([
      UserEntity,
      HouseEntity
    ])
  ],
  controllers: [AppController],
  providers: [{
    provide: AppService,
    useClass: AppJapanService
  },
    {
      provide: 'APP_NAME',
      useValue: 'Nest Events Backend!'
    },
    {
      provide: 'MESSAGE',
      inject: [AppDummy],
      useFactory: (app) => `${app.dummy()} Factory`
    }, AppDummy
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes({
      path: 'interceptor',
      method: RequestMethod.ALL
    })
  }
}
