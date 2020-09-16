
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {"VIN":"12345", "Make":"Ford", "Model": "Mustang", "Mileage": "10 000"},
        {"VIN":"12331", "Make":"Toyota", "Model": "Prius", "Mileage": "14 000"},
      ]);
    });
};
