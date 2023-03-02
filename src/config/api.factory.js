import { __awaiter } from "tslib";
import { NestFactory } from "@nestjs/core";
import { ApiModule } from "../app.module";
export function apiFactory() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield NestFactory.create(ApiModule.forRootAsync(), {
            cors: true,
            rawBody: true,
        });
    });
}
//# sourceMappingURL=api.factory.js.map