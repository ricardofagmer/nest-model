import { __decorate } from "tslib";
import { Global, Module } from '@nestjs/common';
import { EnvService } from "./env.service";
let EnvModule = class EnvModule {
};
EnvModule = __decorate([
    Global(),
    Module({
        providers: [
            EnvService,
        ],
        exports: [
            EnvService,
        ],
    })
], EnvModule);
export { EnvModule };
//# sourceMappingURL=env.module.js.map