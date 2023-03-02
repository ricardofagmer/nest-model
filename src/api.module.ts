import { DynamicModule, Global, Module } from "@nestjs/common";
import { ApiBundleModule } from "./config/api-bundle.module";
import { apiBundleConfigBuilder } from "./config/api-bundle.module-config";
import {getMetadataArgsStorage} from "typeorm";


@Global()
@Module({})
export class ApiModule {
  static forRootAsync(): DynamicModule {
    return {
      module: ApiModule,
      imports: [
        ApiBundleModule.forRootAsync(apiBundleConfigBuilder().config),
      ]
    };
  }
}
