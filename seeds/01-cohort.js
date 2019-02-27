
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohort')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohort').insert([
        {id: 1, colName: 'web16'},
        {id: 2, colName: 'ios'},
        {id: 3, colName: 'Data Science'}
      ]);
    });
};
