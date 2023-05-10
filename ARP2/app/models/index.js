const sequelize = require('../../db');

const Pacientes = require('./Pacientes');

const modelos = {
    Pacientes,
};


// Relations
//Passageiros.belongsTo(Aeronaves, {foreignKey: 'codigoAeronaveAtual', as: 'aeronave'});
//Aeronaves.hasMany(Passageiros, {foreignKey: 'codigoAeronaveAtual', as: 'passageirosNesta'});


sequelize.sync({ alter: true });

module.exports = modelos;