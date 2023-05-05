const sequelize = require('../../database');

const Passageiros = require('./Passageiros');

const modelos = {
    Passageiros
};


// sequelize.sync({ alter: true });

module.exports = modelos;