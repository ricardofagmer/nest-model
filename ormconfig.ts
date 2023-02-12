/*module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: process.env.DB_LOGGING,
  synchronize: true,
  entities: ['dist/!**!/!*.entity.js'],
};*/

// import { DataSourceOptions } from 'typeorm';

// const config: DataSourceOptions = {
//   type: 'postgres',
//   host: 'biosistemico.cke8dqnvizhk.us-west-2.rds.amazonaws.com',
//   port: 5432,
//   // username: process.env.TYPEORM_USERNAME,
//   username: 'postgres',
//   password: '852963741ibsCONN',
//   database: 'ghgdb',
//   logging: 'all',
//   synchronize: false,
//   entities: ['dist/**/*.entity.js', 'node_modules/@ibs-labs/**/*.entity.js'],
// };

// export default config;

// export default {   //
//   type: process.env.DB_CONNECTION_TYPE,
//   host: process.env.TYPEORM_HOST,
//   port: process.env.TYPEORM_PORT,
//   username: process.env.TYPEORM_USERNAME,
//   password: process.env.TYPEORM_PASSWORD,
//   database: process.env.TYPEORM_DATABASE,
//   logging: process.env.TYPEORM_LOGGING,
//   synchronize: false,
//   entities: ['dist/**/*.entity.js', 'node_modules/@ibs-labs/**/*.entity.js'],
// };

// // module.exports = {
// export default {
//   type: process.env.DB_CONNECTION_TYPE,
//   host: process.env.TYPEORM_HOST,
//   port: parseInt(process.env.TYPEORM_PORT),
//   username: process.env.TYPEORM_USERNAME,
//   password: process.env.TYPEORM_PASSWORD,
//   database: process.env.TYPEORM_DATABASE,
//   logging: process.env.TYPEORM_LOGGING,
//   synchronize: false,
//   entities: ['dist/**/*.entity.js', 'node_modules/@ibs-labs/**/*.entity.js'],
// } as ConnectionOptions;
// import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// export const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'biosistemico.cke8dqnvizhk.us-west-2.rds.amazonaws.com',
//   port: 5432,
//   username: 'postgres',
//   password: '852963741ibsCONN',
//   database: 'ghgdb',
//   entities: ['dist/**/*.entity.js', 'node_modules/@ibs-labs/**/*.entity.js'],
//   synchronize: false,
// };

// module.exports = {
//   type: process.env.DB_CONNECTION_TYPE,
//   host: process.env.TYPEORM_HOST,
//   port: process.env.TYPEORM_PORT,
//   username: process.env.TYPEORM_USERNAME,
//   password: process.env.TYPEORM_PASSWORD,
//   database: process.env.TYPEORM_DATABASE,
//   logging: process.env.TYPEORM_LOGGING,
//   synchronize: false,
//   entities: ['dist/**/*.entity.js', 'node_modules/@ibs-labs/**/*.entity.js'],
// };
