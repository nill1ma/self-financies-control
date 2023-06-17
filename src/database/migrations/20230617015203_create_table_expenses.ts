import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("expenses", (table) => {
    table.increments("id").primary();
    table.text("destination").notNullable();
    table.decimal("payment_value", 14, 2).notNullable();
    table.timestamp("due_time");
    table.timestamp("pay_day");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("expenses");
}
