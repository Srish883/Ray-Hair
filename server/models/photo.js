const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Photo = sequelize.define('Photo', {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.BIGINT, allowNull: false },
  filename: DataTypes.STRING,
  url: DataTypes.STRING,
  meta: DataTypes.JSON
}, {
  tableName: 'photos',
  timestamps: true,
  createdAt: 'uploaded_at',
  updatedAt: false
});

module.exports = Photo;
