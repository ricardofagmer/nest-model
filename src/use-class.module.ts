import { DynamicModule, Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { AppJapanService } from "./app.japan.service";
import { APP_NAME, MESSAGE } from "./constants/constants";


export interface UseClassOptions {
  name: string;
  message: string;
}

@Module({})
export class UseClassModule {
  static forRoot(options: UseClassOptions): DynamicModule {

    return {
      module: UseClassModule,
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useClass: AppJapanService,
        },
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
