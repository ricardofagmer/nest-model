import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from "@nestjs/config";
import { json, urlencoded } from "express";
import { Logger, ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  useMiddlewares();
  initSwagger();
  void initApp();

  function useMiddlewares(): void {
    const cors = (use: boolean) => {
      if (use) {
        app.enableCors();
      }
    };

    const payloadSizeLimit = (use: boolean) => {
      if (use) {
        app.use(json({ limit: '50mb' }));
        app.use(urlencoded({ extended: true, limit: '50mb' }));
      }
    };

    const globalValidationPipe = (use: boolean) => {
      if (use) {
        app.useGlobalPipes(new ValidationPipe());
      }
    };


    cors(true);
    payloadSizeLimit(true);
    globalValidationPipe(true);
  }

  function initSwagger(): void {
    const options = new DocumentBuilder()
      .setTitle('API')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('', app, document);
  }

  async function initApp(): Promise<void> {
    const port: string = configService.get<string>('NEST_PORT');
    const hostname: string | undefined = process.env.HOSTNAME;

    await app.listen(+port, () => {
      logger.log(
        `\n\nServidor rodando em ${configService.get<string>(
          'HOSTNAME',
        )} mode na porta ${port}\n\n`,
      );

      if (hostname) {
        logger.debug(`Host: ${hostname}`);
      }
    });
  }
}

bootstrap();
