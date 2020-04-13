const dotenv = require('dotenv')

dotenv.config()
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_PATH,
    host: process.env.HOST,
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_PATH_test,
    host: process.env.HOST,
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
    host_name: process.env.HOST_NAME,
    logging: false,
  },
}
