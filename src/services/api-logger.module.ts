import { DynamicModule, Global, Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston/dist/winston.utilities';
import {SuprLogger} from "./supr-logger.service";

export interface LoggerConfig {
    debugMode: boolean;
}

@Global()
@Module({
    providers: [SuprLogger],
    exports: [SuprLogger],
})
export class ApiLoggerModule {
    public static forRoot(config: LoggerConfig): DynamicModule {
        return {
            module: ApiLoggerModule,
            imports: [
                WinstonModule.forRoot({
                    transports: [
                        new winston.transports.Console({
                            level: config.debugMode ? 'debug' : 'info',
                            format: winston.format.combine(
                                winston.format.errors({ trace: true }),
                                winston.format.timestamp(),
                                winston.format.ms(),
                                nestWinstonModuleUtilities.format.nestLike(
                                    'SUPR',
                                    { prettyPrint: true }
                                )
                            ),
                        }),
                    ],
                }),
            ],
        };
    }
}
