import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("expenses", (table) => {
    table.text("username")
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable("expenses", (table) => {
    table.dropColumn("user_id");
  });
}
