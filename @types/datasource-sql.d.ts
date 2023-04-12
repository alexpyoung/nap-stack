declare module 'datasource-sql' {
  import { DataSource } from 'apollo-datasource';
  import { Knex } from 'knex';

  export class SQLDataSource extends DataSource {
    public db: Knex;
    constructor(config: Knex.Config);
  }
}
