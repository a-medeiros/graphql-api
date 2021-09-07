import { Sequelize } from 'sequelize';
import dbConfig from '../config/database';

const db = new Sequelize(dbConfig);

db.authenticate()
    .then(() => console.log('Connected to the database!'))
    .catch((err) => console.log('Unable to connect to the database: ', err));

export default db;