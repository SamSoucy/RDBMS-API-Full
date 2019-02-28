
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {id: 1, name: 'web16'},
        {id: 2, name: 'ios'},
        {id: 3, name: 'Data Science'}
      ]);
    });
};
