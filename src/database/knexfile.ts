export const development = {
  client: 'postgresql',
  connection: {
    database: 'postgres',
    user: 'postgres',
    host: 'database',
  },
  migrations: {
    directory: './migrations',
    tableName: 'migrations',
  }
};
