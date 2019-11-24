import { SQLDataSource } from 'datasource-sql';
import uuid from 'uuid/v4';

export default class Database extends SQLDataSource {
  public async getUsers(ids: string[] = []) {
    if (ids.length > 0) {
      return this.db
        .select("*")
        .from("users")
        .whereIn("id", ids);
    }
    return this.db
      .select("*")
      .from("users")
      .cache();
  }

  public async createUser(email: string, password: string) {
    return this.db
      .table('users')
      .returning('id')
      .insert({ id: uuid(), email, password });
  }

  public async deleteUser(id: string) {
    return this.db
      .table('users')
      .where('id', id)
      .del();
  }
}
