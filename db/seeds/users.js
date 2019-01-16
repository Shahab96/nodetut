
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Shahab',
          last_name: 'Dogar'
        }, {
          first_name: 'Mackenzie',
          last_name: 'Skodiak'
        }, {
          first_name: 'Hassan',
          last_name: 'Khan'
        }
      ]);
    });
};
