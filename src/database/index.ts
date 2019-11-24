import { SQLDataSource } from 'datasource-sql';

export default class Database extends SQLDataSource {
  public async getUsers() {
    return this.db
      .select("*")
      .from("users")
      .cache();
  }
}
