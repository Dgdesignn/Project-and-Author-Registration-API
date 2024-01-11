/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex=>
    knex.schema.createTable('authors',(table)=>{
    table.increments('author_id').primary(),
    table.string('name'),
    table.timestamp('created_at').defaultTo(knex.fn.now()),
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    
  })


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex=>knex.schema.dropTable('authors')

