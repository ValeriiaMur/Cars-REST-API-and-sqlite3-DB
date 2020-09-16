
exports.up = function(knex) {
  return knex.schema.createTable('cars',  tbl => {
    tbl.increments();
    tbl.text('VIN')
        .unique()
        .notNullable();
    tbl.text('Make')
        .notNullable();
    tbl.text('Model')
        .notNullable();
    tbl.text('Mileage')
        .notNullable();
    tbl.text('titleStatus');
    tbl.text('transmissionType');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
