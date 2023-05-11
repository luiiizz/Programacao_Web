const  { Sequelize, DataTypes }  = require('sequelize');

const sequelize = require('../../db');

const Agendas = sequelize.define('agendas', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    horario: {
        type: DataTypes.STRING,
    },
    telefone: {
        type: DataTypes.STRING,
    },
    medico: {
      type: DataTypes.STRING,
    },
    tipoConsulta: {
      type: DataTypes.STRING,
    },
    idPaciente: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Pacientes',
        key: 'id'
      }
    }
  });
  
  module.exports = Agendas;