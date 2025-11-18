const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Survey = sequelize.define("Survey", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  hairType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  porosity: {
    type: DataTypes.STRING,
  },
  scalpType: {
    type: DataTypes.STRING,
  },
  scalpConcerns: {
    type: DataTypes.JSON, 
    defaultValue: [],
  },
  washFrequency: {
    type: DataTypes.STRING,
  },
  heatToolUsage: {
    type: DataTypes.STRING,
  },
  waterType: {
    type: DataTypes.STRING,
  },
  hairGoals: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
  currentShampoo: {
    type: DataTypes.STRING,
  },
  currentConditioner: {
    type: DataTypes.STRING,
  },
  satisfaction: {
    type: DataTypes.INTEGER,
    defaultValue: 5,
  },
});

module.exports = Survey;