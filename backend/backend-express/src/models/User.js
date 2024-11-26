const { DataTypes } = require('sequelize');
const database = require('../config/database');

const User = database.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  username: {
    type: DataTypes.STRING,
    unique: true,
  },

  email: {
    type: DataTypes.STRING,
    unique: true,
  },

  password: {
    type: DataTypes.STRING,
  }
});

const UserProfile = database.define('UserProfile', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  firstname: {
    type: DataTypes.STRING,
  },

  lastname: {
    type: DataTypes.STRING,
  },

  username: {
    type: DataTypes.STRING,
    references: {
      model: 'Users',
      key: 'username',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    unique: true,
  },

  gender: {
    type: DataTypes.STRING,
  },

  sexualPreference: {
    type: DataTypes.STRING,
  },

  sexualPreference: {
    type: DataTypes.STRING,
  },

  biography: {
    type: DataTypes.TEXT,
  },

  //ajouter list of preference

});

module.exports = User;
module.exports = UserProfile;


// userId: {
//   type: DataTypes.INTEGER,
//   references: {
//     model: 'Users', // Le nom de la table associée
//     key: 'id', // La colonne clé primaire à laquelle se réfère cette clé étrangère
//   },
//   onUpdate: 'CASCADE', // Que faire lors d'une mise à jour
//   onDelete: 'SET NULL', // Que faire lors d'une suppression
// },
// });