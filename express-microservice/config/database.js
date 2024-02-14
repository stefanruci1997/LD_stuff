const {Sequelize} = require('sequelize');
const {Pool} = require("pg");

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost', // Change this to your PostgreSQL host
    port: 5432,        // Change this to your PostgreSQL port
    username: 'postgres', // Change this to your PostgreSQL username
    password: '1997', // Change this to your PostgreSQL password
    database: 'news-portal' // Change this to your PostgreSQL database name
});

const db_pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'news-portal',
    password: '1997',
    port: 5432,
});

module.exports = sequelize;
module.exports = db_pool;
