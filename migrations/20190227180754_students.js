
exports.up = function (knex, Promise) {
    return knex.schema.createTable("students", function (tbl) {
        tbl.increments();

        tbl
            .string("name")
            .notNullable()
            .unique()
  
        tbl
            .integer('cohort_id')
            .unsigned()
        
        tbl.timestamps(true, true);
            
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('students');
};


//npx knex migrate:latest