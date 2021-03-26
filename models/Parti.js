const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Parti extends Model {}


Parti.init(
    {
        parti_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id:{
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'user_id',}
                },
        event_id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
              model: 'event',
              key: 'event_id',
                    },
                  },        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'parti', 
    }
)


module.exports = Parti;