const { DataTypes } = require('sequelize');
const database = require('../config/database');

const User = database.define('User', {
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  }
});

module.exports = User;