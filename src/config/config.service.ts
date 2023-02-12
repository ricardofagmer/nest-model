import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from "path";

class ConfigService {

  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    console.log(this.env.DB_USER_NAME);
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: process.env.DB_TYPE,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      logging: process.env.DB_LOGGING,
      synchronize: true,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')]
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'DB_HOST',
  'DB_PORT',
  'DB_USER_NAME',
  'DB_PASSWORD',
  'DB_NAME',
  'DB_LOGGING',
]);

export { configService };