import { DynamicModule, Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { APP_NAME, MESSAGE } from "./constants/constants";


export interface UseValueOptions {
  name: string;
  message: string;
}

@Module({})
export class UseValueModule {
  static forRoot(options: UseValueOptions): DynamicModule {

    return {
      module: UseValueModule,
      controllers: [],
      providers: [
        AppService,
        {
          provide: APP_NAME,
          useValue: options.name,
        },
        {
          provide: MESSAGE,
          useValue: options.message,
        }
      ],
    };
  }
}
