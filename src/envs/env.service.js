var EnvService_1;
import { __decorate, __metadata } from "tslib";
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
export const BOOLEAN_TRUE_ENV_VALUES = ['1', 'true', 'yes', 'y', true];
export const BOOLEAN_FALSE_ENV_VALUES = ['0', 'false', 'no', 'n', false];
export function isBooleanEnvTrue(input) {
    return BOOLEAN_TRUE_ENV_VALUES.includes((input || '').toString().toLowerCase());
}
let EnvService = EnvService_1 = class EnvService {
    /**
     * Imports .env file from specific file path
     */
    static importEnvFile(request) {
        dotenv.config({ path: request.filePath });
    }
    /**
     * Returns true of singleton service is available to use
     */
    static hasInstance() {
        return !!EnvService_1.__instance;
    }
    /**
     * Returns singleton instance of EnvService
     * @see hasInstance
     */
    static getInstance() {
        if (!EnvService_1.hasInstance()) {
            throw new Error('Instance not available');
        }
        return this.__instance;
    }
    constructor() {
        this._env = process.env;
        EnvService_1.__instance = this;
    }
    /**
     * Returns all environment variables
     */
    get all() {
        return Object.assign({}, process.env);
    }
    has(envKey) {
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
    get(envKey, options = {}) {
        const value = this._env[envKey];
        if (value === undefined) {
            // eslint-disable-next-line no-prototype-builtins
            if (!options.hasOwnProperty('defaultValue')) {
                throw new Error(envKey);
            }
            return options.defaultValue;
        }
        else {
            return value;
        }
    }
    /**
     * Returns environment variable as string value
     */
    getAsString(envKey, options = {}) {
        return (this.get(envKey, options) || '').toString();
    }
    /**
     * Returns environment variable as ENUM value
     */
    getAsEnum(envKey, options) {
        const result = this.get(envKey, options);
        if (result !== options.defaultValue && !Object.values(options.enum).includes(result)) {
            throw new Error(envKey);
        }
        return result;
    }
    /**
     * Returns environment variable as numeric (integer or float) value
     */
    getAsNumeric(envKey, options = { defaultValue: undefined }) {
        const value = this.get(envKey, options);
        if (value === undefined) {
            // eslint-disable-next-line no-prototype-builtins
            if (!options.hasOwnProperty('defaultValue')) {
                throw new Error(envKey);
            }
            return options.defaultValue;
        }
        else {
            if (typeof value === 'number') {
                if (isNaN(value)) {
                    throw new Error(envKey);
                }
                return value;
            }
            else if (typeof value === 'string') {
                if (isNaN(parseInt(value, 10))) {
                    throw new Error(envKey);
                }
                return parseInt(value, 10);
            }
            else {
                throw new Error(envKey);
            }
        }
    }
    /**
     * Returns environment variable as Boolean value
     * @see BOOLEAN_TRUE_ENV_VALUES
     * @see BOOLEAN_FALSE_ENV_VALUES
     */
    getAsBoolean(envKey, options = { defaultValue: undefined }) {
        const value = this.get(envKey, options);
        if (value === undefined) {
            // eslint-disable-next-line no-prototype-builtins
            if (!options.hasOwnProperty('defaultValue')) {
                throw new Error(envKey);
            }
            return options.defaultValue;
        }
        else {
            if (typeof value === 'boolean') {
                return value;
            }
            else if ([...BOOLEAN_TRUE_ENV_VALUES, ...BOOLEAN_FALSE_ENV_VALUES].includes(value.toLowerCase())) {
                return isBooleanEnvTrue(value);
            }
            else {
                throw new Error(envKey);
            }
        }
    }
};
EnvService = EnvService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], EnvService);
export { EnvService };
//# sourceMappingURL=env.service.js.map