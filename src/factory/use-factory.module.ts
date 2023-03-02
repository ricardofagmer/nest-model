import { DynamicModule, Module } from "@nestjs/common";
import { AppService } from "../app.service";
import { APP_NAME, MESSAGE } from "../constants/constants";
import {AppDummy} from "../app.dummy";
import {FactoryController} from "./factory.controller";


export interface UseFactoryOptions {
  message: string;
}

@Module({})
export class UseFactoryModule {
  static forRoot(options: UseFactoryOptions): DynamicModule {

    return {
      module: UseFactoryModule,
      controllers: [FactoryController],
      providers: [
        {
          provide: 'FACTORY',
          inject: [AppDummy],
          useFactory: (app) => app.dummy() + ' --> '+options.message
        }, AppDummy
      ],
    };
  }
}
