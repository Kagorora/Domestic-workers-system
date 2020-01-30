import sequelize from 'sequelize'

const dbconnrection = new sequelize('postgres', process.env.DB_USER, process.env.DB_PASSWORD,
  {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
  })
export default dbconnrection