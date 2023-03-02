var UseValueModule_1;
import { __decorate } from "tslib";
import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { APP_NAME, MESSAGE } from "./constants/constants";
let UseValueModule = UseValueModule_1 = class UseValueModule {
    static forRoot(options) {
        return {
            module: UseValueModule_1,
            controllers: [],
            providers: [
                AppService,
                {
                    provide: APP_NAME,
                    useValue: options.name,
                },
                {
                    provide: MESSAGE,
                    useValue: options.message,
                }
            ],
        };
    }
};
UseValueModule = UseValueModule_1 = __decorate([
    Module({})
], UseValueModule);
export { UseValueModule };
//# sourceMappingURL=use-value.module.js.map