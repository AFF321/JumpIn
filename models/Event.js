const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
  {
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    host_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    event_date: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    event_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_city: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    event_state: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    event_zip: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'user_id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'event',
  }
);

module.exports = Event;
