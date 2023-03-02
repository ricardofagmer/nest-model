import { TYPEORM_MODULE_CONFIG } from "./typeorm.module-config";
export var Application;
(function (Application) {
    Application["API"] = "api";
    Application["CMS"] = "cms";
    Application["WEB"] = "web";
    Application["IOS"] = "ios";
    Application["ANDROID"] = "android";
})(Application || (Application = {}));
export function apiBundleConfigBuilder() {
    return configBuilder;
}
export class ApiBundleConfigBuilder {
    constructor() {
        this._config = {
            apiFactory: () => {
                console.error('[api-bundle] No API factory provided');
                console.error('Please inject your API factory with apiBundleConfigBuilder.withApiFactory method');
                throw new Error();
            },
            applications: Object.values(Application),
            features: {},
            modulesConfig: {}
        };
    }
    get config() {
        return this._config;
    }
    withApiFactory(factory) {
        this._config.apiFactory = factory;
        return this;
    }
}
const configBuilder = new ApiBundleConfigBuilder();
export const defaultApiBundleModuleConfig = {
    TypeOrmModule: TYPEORM_MODULE_CONFIG,
};
//# sourceMappingURL=api-bundle.module-config.js.map