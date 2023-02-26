import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { ApiModule } from "../app.module";


export async function apiFactory(): Promise<NestExpressApplication> {

  return await NestFactory.create<NestExpressApplication>(ApiModule.forRootAsync(), {
    cors: true,
    rawBody: true,
  });

}