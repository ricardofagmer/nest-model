import { NestExpressApplication } from "@nestjs/platform-express";
import { ApiBundleConfig } from "./config/api-bundle.module-config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

export class ApiBootstrap {
  private app: NestExpressApplication;

  constructor(private readonly config: ApiBundleConfig) {
  }

  async bootstrap(): Promise<NestExpressApplication> {
    this.app = await this.config.apiFactory();

    await this.useMiddlewares();
    await this.initSwagger();
    await this.app.init();

    await this.startHttpServer();

    return this.app;

  }

  async startHttpServer(): Promise<void> {
    const httpPort = 3000;

    await this.app.listen(httpPort);
  }

  useMiddlewares(): void {
    const globalValidationPipe = (use: boolean) => {
      if (use) {
        this.app.useGlobalPipes(new ValidationPipe());
      }
    };

    globalValidationPipe(true);
  }

  initSwagger(): void {
    const options = new DocumentBuilder()
      .setTitle("API")
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(this.app, options);

    SwaggerModule.setup("", this.app, document);
  }


}