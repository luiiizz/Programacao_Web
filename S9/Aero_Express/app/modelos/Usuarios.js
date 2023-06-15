const  { Sequelize, DataTypes }  = require('sequelize');

const sequelize = require('../../database');

const Usuarios = sequelize.define('usuarios', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      indexes:[{unique:true, fields: ['login']}]
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  
  module.exports = Usuarios;