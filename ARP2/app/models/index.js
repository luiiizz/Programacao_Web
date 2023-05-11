const sequelize = require('../../db');

const Pacientes = require('./Pacientes');
const Agendas = require('./Agendas');

const modelos = {
    Pacientes,
    Agendas
};


// Relations
Pacientes.hasMany(Agendas, {foreignKey: 'idPaciente', as: 'agendas'});
Agendas.belongsTo(Pacientes, {foreignKey: 'idPaciente', as: 'paciente'});


sequelize.sync({ alter: true });

module.exports = modelos;