exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
  });
};

exports.down = function (knex) {
  knex.schema.dropTable("users");
};
