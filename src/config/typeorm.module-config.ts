import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { EnvService } from "../envs/env.service";
import { getMetadataArgsStorage } from "typeorm";
import {SuprLogger} from "../services/supr-logger.service";

export const TYPEORM_MODULE_CONFIG: () => TypeOrmModuleAsyncOptions = () => ({
  inject: [EnvService, SuprLogger],
  useFactory: (env: EnvService<any>) => {
    return {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      //entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: process.env.DB_SYNCHRONIZE,
      dropSchema: false,
      logging: process.env.DB_LOGGING,
      trace: true,
    }
  },
})
