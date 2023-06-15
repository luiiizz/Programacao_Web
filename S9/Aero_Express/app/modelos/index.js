const sequelize = require('../../database');

const Passageiros = require('./Passageiros');
const Aeronaves = require('./Aeronaves');
const Usuarios = require('./Usuarios');

const modelos = {
    Passageiros,
    Aeronaves,
    Usuarios,
};


// Relations
Passageiros.belongsTo(Aeronaves, {foreignKey: 'codigoAeronaveAtual', as: 'aeronave'});
Aeronaves.hasMany(Passageiros, {foreignKey: 'codigoAeronaveAtual', as: 'passageirosNesta'});


sequelize.sync({ alter: true });

module.exports = modelos;