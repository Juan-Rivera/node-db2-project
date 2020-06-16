const { useNullAsDefault } = require("../knexfile");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: "1N4AA51EX9C820905", make: "Tesla", model: "Model S", mileage: 1234, transmission: 'electric', titleStatus: 'clean' },
        { vin: "JHMCG66802C072714", make: "Tesla", model: "Model 3", mileage: 45765, transmission: 'electric', titleStatus: useNullAsDefault },
        { vin: "2G1125S31E9183398", make: "Tesla", model: "Model X", mileage: 14700, transmission: 'electric', titleStatus: 'salvage' },
        { vin: "5XYPK4A53GG098889", make: "Tesla", model: "Model Y", mileage: 42000, transmission: 'electric',titleStatus: useNullAsDefault }
      ]);
    });
};
