import {DynamicModule, Global, Module, OnModuleInit} from "@nestjs/common";
import {ApiBundleConfig, defaultApiBundleModuleConfig} from "./api-bundle.module-config";
import {HttpModule} from "@nestjs/axios";
import {TypeOrmModule} from "@nestjs/typeorm";
import * as path from "path";
import {EnvModule} from "../envs/env.module";
import {EnvService} from "../envs/env.service";
import {UseValueModule} from "../use-value.module";
import {ApiLoggerModule} from "../services/api-logger.module";
import {UseClassModule} from "../use-class.module";
import {isArgumentsInProcess} from "../app.module";
import {AppJapanService} from "../app.japan.service";
import {UseFactoryModule} from "../factory/use-factory.module";

const envFileConfigPath = path.join(process.cwd(), "src","envs" ,`.env`);

EnvService.importEnvFile({
  filePath: envFileConfigPath,
});

export const API_ENV_CONFIG_PATH = Symbol();


@Module({})
export class ApiBundleModule {

  static forRootAsync(config: ApiBundleConfig): DynamicModule {
    const moduleConfig = {
      ...defaultApiBundleModuleConfig,
      ...config.modulesConfig,
    };

    //basement to work
    const NEST_MODULES = [
      HttpModule,
      TypeOrmModule.forRootAsync(moduleConfig.TypeOrmModule(config)),
      ApiLoggerModule.forRoot({
        debugMode: isArgumentsInProcess(['--verbose', '-v']),
      }),
    ];

    const PROJECT_MODULES = [
      UseValueModule.forRoot({
        name: process.env.APP_NAME,
        message: process.env.APP_NAME
      }),

      UseClassModule.forRoot({
        class: AppJapanService,
        name: process.env.DB_NAME,
        message: process.env.NEST_PORT
      }),
        UseFactoryModule.forRoot({
          message: 'HEY I AM A FACTORY'
        })
    ]

    return {
      module: ApiBundleGlobalModule,
      imports: [...NEST_MODULES, ...PROJECT_MODULES, EnvModule],
      providers: [
        {
          provide: API_ENV_CONFIG_PATH,
          useValue: envFileConfigPath,
        }
      ],
    };
  }
}

@Global()
@Module({})
class ApiBundleGlobalModule implements OnModuleInit {
  onModuleInit(): any {
    EnvService.getInstance()
  }

}
