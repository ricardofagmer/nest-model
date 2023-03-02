import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger as WinstonLogger } from 'winston';

@Injectable()
export class SuprLogger {
    protected static instance?: SuprLogger;

    constructor(
        @Inject(WINSTON_MODULE_PROVIDER)
        private readonly winstonLogger: WinstonLogger
    ) {
        SuprLogger.setInstance(this);
    }

    public log(message: unknown, context = 'INFO') {
        this.winstonLogger.info(message as string, { context });
    }

    public warn(message: unknown, context = 'WARN') {
        this.winstonLogger.warn(message as string, { context });
    }

    public debug(
        message: unknown,
        json?: Record<string | number, unknown>,
        context = 'DEBUG'
    ) {
        this.winstonLogger.debug(message as string, { context, json });
    }

    public verbose(message: unknown, context = 'VERBOSE') {
        this.winstonLogger.verbose(message as string, { context });
    }

    public error(message: unknown, trace = '', context = 'ERROR') {
        this.winstonLogger.error(message as string, {
            context,
            message: trace,
        });
    }

    public static setInstance(instance: SuprLogger) {
        if (this.instance && this.instance instanceof SuprLogger) return;

        if (!(instance instanceof SuprLogger)) return;

        this.instance = instance;
    }

    public static log(message: unknown, context?: string) {
        this.instance.log(message, context);
    }

    public static warn(message: unknown, context?: string) {
        this.instance.warn(message, context);
    }

    public static debug(message: unknown, json?: any, context?: string) {
        this.instance.debug(message, json, context);
    }

    public static verbose(message: unknown, context?: string) {
        this.instance.verbose(message, context);
    }

    public static error(message: unknown, trace = '', context?: string) {
        this.instance.error(message, trace, context);
    }
}
