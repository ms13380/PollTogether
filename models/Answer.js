const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Answer extends Model {}

Answer.init(
    {
        poll_id: {
            type: DataTypes.STRING,
            allowNull: false,
            // primaryKey: true
            references: {
                model: 'polls',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // primaryKey: true
            references: {
                model: 'user',
                key: 'id'
            }
        },
        option: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'answer'
    }
);

module.exports = Answer;