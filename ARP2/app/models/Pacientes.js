const  { Sequelize, DataTypes }  = require('sequelize');

const sequelize = require('../../db');

const Pacientes = sequelize.define('pacientes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataNascimento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        indexes:[{unique:true, fields: ['cpf']}]
    },
    endereco: {
        type: DataTypes.STRING,
    },
    telefone: {
        type: DataTypes.STRING,
    }
  });
  
  module.exports = Pacientes;