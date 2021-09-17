const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    host: 'localhost',
    dialect: 'postgres',
    database: process.env.DATABASE, 
    username: process.env.USER, 
    password: process.env.USER_PASSWORD,
    define: {
        timestamps: true
    }
}