exports.up = knex => knex.schema
    .createTable('cars', table => {
        table.string('id'),
        table.string('brand'),
        table.string('models'),
        table.string('iso2', 2),
        table.boolean('deleted');
        table.timestamp('createdAt');
        table.timestamp('updatedAt');
        table.timestamp('deletedAt');
        table.integer('__v');
    });

exports.down = knex => knex.schema 
    .dropTable('cars')