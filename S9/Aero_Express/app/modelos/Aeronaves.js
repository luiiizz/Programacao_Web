const  { Sequelize, DataTypes }  = require('sequelize');

const sequelize = require('../../database');

const Aeronaves = sequelize.define('aeronaves', {
    codigo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    localizacao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    IATA: {
        type: DataTypes.INTEGER,
    },
    ICAO: {
        type: DataTypes.INTEGER,
    }
  });
  
  module.exports = Aeronaves;