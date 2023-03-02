import { NestApplication } from "@nestjs/core";
import { TYPEORM_MODULE_CONFIG } from "./typeorm.module-config";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { NestExpressApplication } from "@nestjs/platform-express";

export interface Features {
  [feature: string]: boolean;
}


export enum Application {
  API = 'api',
  CMS = 'cms',
  WEB = 'web',
  IOS = 'ios',
  ANDROID = 'android',
}

export interface ApiBundleConfig {
  /**
   * API APP Factory
   */
  apiFactory: () => Promise<NestExpressApplication>;

  /**
   * List of allowed applications
   */
  applications: Array<Application>;

  /**
   * Features configuration
   */
  features: Features;

  modulesConfig: Partial<ApiBundleModuleConfig>;

  /* just another option to pass through de settings */
  enableWhiteList: boolean;

}

export interface ApiBundleModuleConfig {
  TypeOrmModule: (config: ApiBundleConfig) => TypeOrmModuleAsyncOptions;
}

export function apiBundleConfigBuilder(): ApiBundleConfigBuilder {
  return configBuilder;
}

export class ApiBundleConfigBuilder {
  private _config: ApiBundleConfig = {
    apiFactory: () => {
      console.error('[api-bundle] No API factory provided');
      console.error('Please inject your API factory with apiBundleConfigBuilder.withApiFactory method');

      throw new Error();
    },

    applications: Object.values(Application),
    features: {},
    modulesConfig: {},
    enableWhiteList: true,

  }

  get config(): ApiBundleConfig {
    return this._config;
  }

  withApiFactory(factory: () => Promise<NestExpressApplication>): ApiBundleConfigBuilder {
    this._config.apiFactory = factory;

    return this;
  }

  withWhitelist(): any {
    this._config.enableWhiteList = true;

    return this;
  }
}

const configBuilder = new ApiBundleConfigBuilder();

export const defaultApiBundleModuleConfig: ApiBundleModuleConfig = {
  TypeOrmModule: TYPEORM_MODULE_CONFIG,
}

