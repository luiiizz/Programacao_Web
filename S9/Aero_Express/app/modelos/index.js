const sequelize = require('../../database');

const Passageiros = require('./Passageiros');
const Aeronaves = require('./Aeronaves');

const modelos = {
    Passageiros,
    Aeronaves
};


// Relations
Passageiros.belongsTo(Aeronaves, {foreignKey: 'codigoAeronaveAtual', as: 'aeronave'});
Aeronaves.hasMany(Passageiros, {foreignKey: 'codigoAeronaveAtual', as: 'passageirosNesta'});


sequelize.sync({ alter: true });

module.exports = modelos;