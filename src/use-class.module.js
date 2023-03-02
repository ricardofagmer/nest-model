var UseClassModule_1;
import { __decorate } from "tslib";
import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { AppJapanService } from "./app.japan.service";
import { APP_NAME, MESSAGE } from "./constants/constants";
let UseClassModule = UseClassModule_1 = class UseClassModule {
    static forRoot(options) {
        return {
            module: UseClassModule_1,
            controllers: [AppController],
            providers: [
                {
                    provide: AppService,
                    useClass: AppJapanService,
                },
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
UseClassModule = UseClassModule_1 = __decorate([
    Module({})
], UseClassModule);
export { UseClassModule };
//# sourceMappingURL=use-class.module.js.map