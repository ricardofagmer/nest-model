import { DynamicModule, Global, Module } from "@nestjs/common";
import { ApiBundleModule } from "./config/config.module";
import { apiBundleConfigBuilder } from "./config/api-bundle.module-config";


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