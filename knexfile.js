// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host:'localhost',
      port:3306,
      user: 'root',
      password:'',
      database:'knex_001'
    }
  },

  migrations: {
    tableName: 'migrations',
    directory: `${__dirname}/src/database/migrations`,
  },
};
