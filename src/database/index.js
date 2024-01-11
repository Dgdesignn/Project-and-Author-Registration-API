///const knexfile = require('../../knexfile.js');
const connection = require('knex')({
    client: 'mysql',
    connection:{
        host:'127.0.0.1',
        port:3306,
        user:'root',
        password:'',
        database:'knex_001'
    },
   
});

module.exports = connection;