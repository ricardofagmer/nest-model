import { apiBundleConfigBuilder } from "./config/api-bundle.module-config";
import { apiFactory } from "./config/api.factory";
let IS_CONFIGURED = false;
if (!IS_CONFIGURED) {
    const apiConfig = [];
    apiConfig.forEach((config) => config());
    apiBundleConfigBuilder()
        .withApiFactory(apiFactory);
    IS_CONFIGURED = true;
}
//# sourceMappingURL=main-config.js.map