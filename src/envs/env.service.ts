import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

export interface GetOptions<T = any> {
    defaultValue?: T;
}
export interface GetAsNumericOptions {
    defaultValue?: number;
}
export interface GetAsBooleanOptions {
    defaultValue?: boolean;
}
export interface GetAsEnumOptions<ENUM = any> {
    enum: any /* TODO: Should be something like ComponentType<ENUM> */;
    defaultValue?: ENUM;
}

export const BOOLEAN_TRUE_ENV_VALUES = ['1', 'true', 'yes', 'y', true];
export const BOOLEAN_FALSE_ENV_VALUES = ['0', 'false', 'no', 'n', false];

export function isBooleanEnvTrue(input: string): boolean {
    return BOOLEAN_TRUE_ENV_VALUES.includes((input || '').toString().toLowerCase());
}

@Injectable()
export class EnvService<T = any> {
    private _env: any = process.env as any;

    private static __instance: EnvService;

    /**
     * Imports .env file from specific file path
     */
    static importEnvFile(request: { filePath: string }): void {

        dotenv.config({ path: request.filePath });
    }

    /**
     * Returns true of singleton service is available to use
     */
    static hasInstance(): boolean {
        return !!EnvService.__instance;
    }

    /**
     * Returns singleton instance of EnvService
     * @see hasInstance
     */
    static getInstance(): EnvService {
        if (!EnvService.hasInstance()) {
            throw new Error('Instance not available');
        }

        return this.__instance;
    }

    constructor() {
        EnvService.__instance = this as any;
    }


    /**
     * Returns all environment variables
     */
    get all(): Record<string, string> {
        return { ...process.env };
    }

    private has<T>(envKey: keyof T) {
        // eslint-disable-next-line no-prototype-builtins
        return this._env.hasOwnProperty(envKey);
    }

    /**
     * The method will be private in future.
     * Use getAsString, getAsNumber, getAsEnum or getAsBoolean methods to fetch environment values.
     * TODO:: Make as private
     *
     * @see EnvService.getAsString
     * @see EnvService.getAsNumber
     * @see EnvService.getAsEnum
     * @see EnvService.getAsBoolean
     * @deprecated
     */
    public get<E = any>(
        envKey: keyof T | keyof E,
        options: GetOptions = {},
    ): string | boolean | undefined | null {
        const value = this._env[envKey as string];

        if (value === undefined) {
            // eslint-disable-next-line no-prototype-builtins
            if (!options.hasOwnProperty('defaultValue')) {
                throw new Error(envKey as string);
            }

            return options.defaultValue;
        } else {
            return value;
        }
    }

    /**
     * Returns environment variable as string value
     */
    public getAsString<E = 'DEV'>(envKey: keyof T | keyof E, options: GetOptions = {}): string {
        return (this.get(envKey, options) || '').toString();
    }

    /**
     * Returns environment variable as ENUM value
     */
    public getAsEnum<ENUM, E = 'DEV'>(
        envKey: keyof T | keyof E,
        options: GetAsEnumOptions<ENUM>,
    ): ENUM {
        const result = this.get(envKey, options);

        if ((result as any) !== options.defaultValue && !Object.values(options.enum).includes(result)) {
            throw new Error(envKey as any);
        }

        return result as any;
    }

    /**
     * Returns environment variable as numeric (integer or float) value
     */
    public getAsNumeric<E = any>(
        envKey: keyof T | keyof E,
        options: GetAsNumericOptions = { defaultValue: undefined },
    ): number {
        const value = this.get(envKey, options);

        if (value === undefined) {
            // eslint-disable-next-line no-prototype-builtins
            if (!options.hasOwnProperty('defaultValue')) {
                throw new Error(envKey as string);
            }

            return options.defaultValue;
        } else {
            if (typeof value === 'number') {
                if (isNaN(value)) {
                    throw new Error(envKey as string);
                }

                return value;
            } else if (typeof value === 'string') {
                if (isNaN(parseInt(value, 10))) {
                    throw new Error(envKey as string);
                }

                return parseInt(value, 10);
            } else {
                throw new Error(envKey as string);
            }
        }
    }

    /**
     * Returns environment variable as Boolean value
     * @see BOOLEAN_TRUE_ENV_VALUES
     * @see BOOLEAN_FALSE_ENV_VALUES
     */
    public getAsBoolean<E = any>(
        envKey: keyof T | keyof E,
        options: GetAsBooleanOptions = { defaultValue: undefined },
    ): boolean {
        const value = this.get(envKey, options);

        if (value === undefined) {
            // eslint-disable-next-line no-prototype-builtins
            if (!options.hasOwnProperty('defaultValue')) {
                throw new Error(envKey as string);
            }

            return options.defaultValue;
        } else {
            if (typeof value === 'boolean') {
                return value;
            } else if ([...BOOLEAN_TRUE_ENV_VALUES, ...BOOLEAN_FALSE_ENV_VALUES].includes(value.toLowerCase())) {
                return isBooleanEnvTrue(value);
            } else {
                throw new Error(envKey as string);
            }
        }
    }
}
