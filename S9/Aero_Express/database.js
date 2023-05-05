const { Sequelize} = require('sequelize');

const sequelize = new Sequelize('aero', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize