const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Routine = sequelize.define('Routine', {
  id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.BIGINT, allowNull: false },
  title: DataTypes.STRING,
  items: DataTypes.JSON // array of {day, actions[], notes, reminderAt}
}, {
  tableName: 'routines',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Routine;
