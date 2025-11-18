const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const HairProfile = sequelize.define('HairProfile', {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.BIGINT, allowNull: false },
  hairType: DataTypes.STRING,
  porosity: DataTypes.STRING,
  scalpType: DataTypes.STRING,
  scalpConcerns: DataTypes.TEXT, // JSON string or CSV
  naturalColor: DataTypes.STRING,
  chemicalTreatments: DataTypes.TEXT,
  washFrequency: DataTypes.STRING,
  climate: DataTypes.STRING,
  lifestyle: DataTypes.JSON,
  products: DataTypes.JSON,
  satisfaction: DataTypes.INTEGER,
  remindersEnabled: { type: DataTypes.BOOLEAN, defaultValue: true }
}, {
  tableName: 'hair_profiles',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = HairProfile;
