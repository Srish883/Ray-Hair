// backend/config/db.js

// ✅ 1. Load environment variables first
require('dotenv').config();
const { Sequelize } = require('sequelize');

// ✅ 2. Quick debug log (remove later once it works)
console.log('🧠 Database config check:');
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '***HIDDEN***' : '❌ NOT FOUND');
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_SSL:', process.env.DB_SSL);

// ✅ 3. Validate environment variables before connecting
if (!process.env.DB_NAME || !process.env.DB_USER || !process.env.DB_HOST) {
  console.error('❌ Missing required DB environment variables. Please check your .env file.');
  process.exit(1);
}

// ✅ 4. Create Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME,       // Database name
  process.env.DB_USER,       // Database user
  process.env.DB_PASSWORD,   // Database password
  {
    host: process.env.DB_HOST,        // Database host
    port: process.env.DB_PORT || 3306, // Default MySQL port
    dialect: 'mysql',
    logging: false,                   // Set to true for detailed SQL logs
    dialectOptions: {
      ssl: process.env.DB_SSL === 'true' 
        ? { require: true, rejectUnauthorized: false } 
        : undefined
    },
    define: {
      freezeTableName: true,
      timestamps: true
    }
  }
);

// ✅ 5. Test the connection immediately
(async () => {
  for (let i = 1; i <= 5; i++) {
    try {
      await sequelize.authenticate();
      console.log('✅ MySQL connected successfully.');
      break;
    } catch (err) {
      console.error('❌ MySQL connection failed!');
      console.error('Error details:', err.message);
    }
  }
})();

// ✅ 6. Export Sequelize instance
module.exports = sequelize;
