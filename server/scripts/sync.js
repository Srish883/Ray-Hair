const { sequelize } = require('../models');

(async () => {
  try {
    await sequelize.sync({ force: false }); // true to drop and recreate
    console.log('Database synced');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
