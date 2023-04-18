const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('orm_db', 'root', 'root', {
    host: 'localhost',
    logging: false,
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});


const connectionDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connectionDB();


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require('../models/userModel')(sequelize, DataTypes, Model)
db.contact = require('../models/contactModel')(sequelize, DataTypes, Model)

//use model
db.sequelize.sync({ force: false });


module.exports = db;