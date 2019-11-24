import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema
    .createTableIfNotExists('users', table => {
      table.uuid('id');
    });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTableIfExists('users');
}
