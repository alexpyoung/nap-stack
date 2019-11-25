import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema
    .createTableIfNotExists('users', table => {
      table.uuid('id').primary().unique().index();
      table.string('email').unique().notNullable().index();
      table.string('password').notNullable();
    });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTableIfExists('users');
}
