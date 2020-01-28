
'use strict';
const evnironment = require('dotenv');
evnironment.config();
module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password":process.env.DB_PASSWORD,
    "database": process.env.DB_PATH,
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  }
}
