import { Sequelize } from 'sequelize'

const database = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'tecnoflix_development',
  username: 'tecnoflix',
  password: 'tecnoflix',
	define: {
    underscored: true
  }
})

export default database;