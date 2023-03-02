var ApiModule_1;
import { __decorate } from "tslib";
import { Global, Module } from "@nestjs/common";
import { ApiBundleModule } from "./config/config.module";
import { apiBundleConfigBuilder } from "./config/api-bundle.module-config";
import { UseValueModule } from "./use-value.module";
import { UseClassModule } from "./use-class.module";
let ApiModule = ApiModule_1 = class ApiModule {
    static forRootAsync() {
        return {
            module: ApiModule_1,
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
};
ApiModule = ApiModule_1 = __decorate([
    Global(),
    Module({})
], ApiModule);
export { ApiModule };
//# sourceMappingURL=app.module.js.map