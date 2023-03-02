import { EnvService } from "../envs/env.service";
import { getMetadataArgsStorage } from "typeorm";
export const TYPEORM_MODULE_CONFIG = () => ({
    inject: [EnvService],
    useFactory: (env) => {
        console.log(process.env.DB_SYNCHRONIZE);
        return {
            type: 'postgres',
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: getMetadataArgsStorage().tables.map(tbl => tbl.target),
            synchronize: process.env.DB_SYNCHRONIZE,
            logging: process.env.DB_LOGGING,
            trace: true,
        };
    }, //deps: [EnvModule]
});
//# sourceMappingURL=typeorm.module-config.js.map