const sequelize = require('../../database');

const Passageiros = require('./Passageiros');
const Aeronaves = require('./Aeronaves');

const modelos = {
    Passageiros,
    Aeronaves
};


sequelize.sync({ alter: true });

module.exports = modelos;