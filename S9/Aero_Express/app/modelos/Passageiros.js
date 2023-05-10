const  { Sequelize, DataTypes }  = require('sequelize');

const sequelize = require('../../database');


const Passageiros = sequelize.define('passageiros', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      indexes:[{unique:true, fields: ['cpf']}]
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    codigoAeronaveAtual: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Aeronaves',
        key: 'codigo'
      }
    }
  });
  
  module.exports = Passageiros;