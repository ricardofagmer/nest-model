import { DynamicModule, Global, Module, OnModuleInit } from "@nestjs/common";
import { ApiBundleConfig, defaultApiBundleModuleConfig } from "./api-bundle.module-config";
import { HttpModule } from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as path from "path";
import { EnvModule } from "../envs/env.module";
import { EnvService } from "../envs/env.service";

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

    const NEST_MODULES = [
      HttpModule,
      TypeOrmModule.forRootAsync(moduleConfig.TypeOrmModule(config)),
    ];

    return {
      module: ApiBundleGlobalModule,
      imports: [...NEST_MODULES, EnvModule],
      providers: [
        {
          provide: API_ENV_CONFIG_PATH,
          useValue: envFileConfigPath,
        },
      ],
    };
  }
}

@Global()
@Module({})
class ApiBundleGlobalModule implements OnModuleInit {
  onModuleInit(): any {
    console.log(defaultApiBundleModuleConfig);
    EnvService.getInstance()
  }

}
