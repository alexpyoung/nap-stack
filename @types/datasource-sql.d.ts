declare module 'datasource-sql' {

  export class SQLDataSource {
    constructor(config: any);
    get db(): any;
  }
}
