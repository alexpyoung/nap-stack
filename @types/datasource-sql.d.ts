declare module 'datasource-sql' {
  import { DataSource } from 'apollo-datasource';
  import Knex, { Config } from 'knex';

  export class SQLDataSource extends DataSource {
    public db: Knex;
    constructor(config: Config);
  }
}
