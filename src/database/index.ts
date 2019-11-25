import { SQLDataSource } from 'datasource-sql';
import uuid from 'uuid/v4';

import { User } from './types';

export default class Database extends SQLDataSource {
  public async getUsers(ids: string[] = []): Promise<User[]> {
    if (ids.length > 0) {
      return this.db
        .select('*')
        .from('users')
        .whereIn('id', ids);
    }
    return this.db
      .select('*')
      .from('users');
  }

  public async createUser(email: string, password: string): Promise<string[]> {
    return this.db
      .table('users')
      .returning('id')
      .insert({ id: uuid(), email, password });
  }

  public async deleteUser(id: string): Promise<void> {
    return this.db
      .table('users')
      .where('id', id)
      .del();
  }

  public async authenticate(email: string, actual: string): Promise<string | null> {
    const [{
      id,
      password: expected,
    }] = await this.db
      .table('users')
      .returning(['id', 'password'])
      .where('email', email);
    if (actual === expected) {
      return id;
    }
    return null;
  }
}
