import { __awaiter } from "tslib";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import * as dotenv from 'dotenv';
export class ApiBootstrap {
    constructor(config) {
        this.config = config;
    }
    bootstrap() {
        return __awaiter(this, void 0, void 0, function* () {
            dotenv.config();
            this.app = yield this.config.apiFactory();
            yield this.useMiddlewares();
            yield this.initSwagger();
            yield this.app.init();
            yield this.startHttpServer();
            return this.app;
        });
    }
    startHttpServer() {
        return __awaiter(this, void 0, void 0, function* () {
            const httpPort = 3000;
            yield this.app.listen(httpPort);
        });
    }
    useMiddlewares() {
        const globalValidationPipe = (use) => {
            if (use) {
                this.app.useGlobalPipes(new ValidationPipe());
            }
        };
        globalValidationPipe(true);
    }
    initSwagger() {
        const options = new DocumentBuilder()
            .setTitle("API")
            .addBearerAuth()
            .build();
        const document = SwaggerModule.createDocument(this.app, options);
        SwaggerModule.setup("", this.app, document);
    }
}
//# sourceMappingURL=api.bootstrap.js.map