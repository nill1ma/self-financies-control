const dbConfig = require("../../knexfile");

const knex = require("knex")(dbConfig.development);
export { knex };
