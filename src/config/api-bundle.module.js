import { __decorate } from "tslib";
import { Global, Module } from "@nestjs/common";
import { defaultApiBundleModuleConfig } from "./api-bundle.module-config";
import { HttpModule } from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as path from "path";
import { EnvModule } from "../envs/env.module";
import { EnvService } from "../envs/env.service";
const envFileConfigPath = path.join(process.cwd(), "src", "envs", `.env`);
EnvService.importEnvFile({
    filePath: envFileConfigPath,
});
export const API_ENV_CONFIG_PATH = Symbol();
let ApiBundleModule = class ApiBundleModule {
    static forRootAsync(config) {
        const moduleConfig = Object.assign(Object.assign({}, defaultApiBundleModuleConfig), config.modulesConfig);
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
                }
            ],
        };
    }
};
ApiBundleModule = __decorate([
    Module({})
], ApiBundleModule);
export { ApiBundleModule };
let ApiBundleGlobalModule = class ApiBundleGlobalModule {
    onModuleInit() {
        EnvService.getInstance();
    }
};
ApiBundleGlobalModule = __decorate([
    Global(),
    Module({})
], ApiBundleGlobalModule);
//# sourceMappingURL=config.module.js.map