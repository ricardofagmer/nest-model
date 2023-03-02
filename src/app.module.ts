import {DynamicModule, Global, Module} from "@nestjs/common";
import {ApiBundleModule} from "./config/api-bundle.module";
import {apiBundleConfigBuilder} from "./config/api-bundle.module-config";

declare const process;

export const isArgumentsInProcess = (argNames: string[]) => {
    return process.argv.some((arg) => argNames.includes(arg));
};

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
