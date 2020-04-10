const dotenv = require('dotenv')

dotenv.config()
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_PATH,
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_PATH_test,
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  production: {
    User: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    Database: process.env.DB_PATH,
    Host: process.env.HOST,
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    logging: false,
  },
}
