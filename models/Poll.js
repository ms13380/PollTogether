// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Polls model (table) by extending off Sequelize's Model class
class Polls extends Model {}

// set up fields and rules for Polls model
Polls.init(
  {
    // Generated using utils/helpers/randID.js
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false
    },

    poll_title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    poll_desc: {
        type: DataTypes.STRING,
        allowNull: true
    },

    poll_options: {
        type: DataTypes.STRING,
        allowNull: false
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    poll_expire: {
      type: DataTypes.DATE,
      allowNull: true
   }
    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'polls',
  }
);

module.exports = Polls;