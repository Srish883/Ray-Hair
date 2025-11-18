
const sequelize = require('../config/db');
const User = require('./user');
const HairProfile = require('./hairProfile');
const Routine = require('./routine');
const Photo = require('./photo');

// Define associations
User.hasOne(HairProfile, { foreignKey: 'userId', onDelete: 'CASCADE' });
HairProfile.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Routine, { foreignKey: 'userId', onDelete: 'CASCADE' });
Routine.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Photo, { foreignKey: 'userId', onDelete: 'CASCADE' });
Photo.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
  sequelize,
  User,
  HairProfile,
  Routine,
  Photo
};
