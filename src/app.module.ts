import { DynamicModule, Global, Module } from "@nestjs/common";
import { ApiBundleModule } from "./config/config.module";
import { apiBundleConfigBuilder } from "./config/api-bundle.module-config";
import { UseValueModule } from "./use-value.module";
import { UseClassModule } from "./use-class.module";

@Global()
@Module({})
export class ApiModule {
  static forRootAsync(): DynamicModule {

    return {
      module: ApiModule,
      imports: [
         ApiBundleModule.forRootAsync(apiBundleConfigBuilder().config),
          UseValueModule.forRoot({
          name: process.env.APP_NAME,
          message: process.env.APP_NAME
        }),
        UseClassModule.forRoot({
          name: process.env.DB_NAME,
          message: process.env.NEST_PORT
        })
      ]
    };
  }
}