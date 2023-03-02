var ApiModule_1;
import { __decorate } from "tslib";
import { Global, Module } from "@nestjs/common";
import { ApiBundleModule } from "./config/config.module";
import { apiBundleConfigBuilder } from "./config/api-bundle.module-config";
let ApiModule = ApiModule_1 = class ApiModule {
    static forRootAsync() {
        return {
            module: ApiModule_1,
            imports: [
                ApiBundleModule.forRootAsync(apiBundleConfigBuilder().config),
            ]
        };
    }
};
ApiModule = ApiModule_1 = __decorate([
    Global(),
    Module({})
], ApiModule);
export { ApiModule };
//# sourceMappingURL=api.module.js.map