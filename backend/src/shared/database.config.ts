import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const getDatabaseConfig = (): TypeOrmModuleOptions => {
  const host = process.env.DB_HOST ?? 'localhost';
  const port = parseInt(process.env.DB_PORT ?? '5432', 10);
  const database = process.env.DB_NAME ?? 'tgapp';
  const synchronize = process.env.NODE_ENV !== 'production';
  return {
    type: 'postgres',
    host,
    port,
    username: process.env.DB_USER ?? 'tgapp',
    password: process.env.DB_PASSWORD ?? 'tgapp_secret',
    database,
    autoLoadEntities: true,
    synchronize,
    logging: process.env.NODE_ENV === 'development',
  };
};
