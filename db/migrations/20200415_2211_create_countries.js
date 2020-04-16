exports.up = knex => knex.schema 
    .createTable('countries', table => {
        table.string('id');
        table.string('name');
        table.string('code'); 
        table.string('iso2', 2);
        table.boolean('deleted');
        table.timestamp('createdAt');
        table.timestamp('updatedAt');
        table.timestamp('deletedAt');
        table.integer('__v');
    });

exports.down = knex => knex.schema 
    .dropTable('countries')