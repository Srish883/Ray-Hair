// backend/server.js

require('dotenv').config(); // must be first
const express = require('express');
const cors = require('cors');

// Import sequelize connection (config/db.js)
const sequelize = require('./config/db');

// Import routes
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const routineRoutes = require('./routes/routine');
const uploadRoutes = require('./routes/uploads');
const surveyRoutes = require("./routes/survey");

// Initialize express app
const app = express();

// Middleware setup
app.use(cors({
  origin: "*"
}));

app.use(express.json({ limit: '10mb' }));
app.use((req, _, next) => {
  console.log(req.method, req.path);
  next();
})

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/routine', routineRoutes);
app.use('/api/uploads', uploadRoutes);
app.use("/api/survey", surveyRoutes);


app.get('/', (req, res) => {
  res.send('🌿 Ray Haircare Backend is running successfully!');
});
app.get("/ping", (req, res) => {
  res.set("Cache-Control", "no-store");
  res.status(200).json({ message: "Server reached!" });
});


const PORT = process.env.PORT || 8000;

// Start server and connect DB
async function start() {
  try {
    // ✅ Fix: authenticate() instead of authenticote()
    await sequelize.authenticate();
    console.log('✅ Database connection established.');

    // Sync all models
    await sequelize.sync();

    console.log('✅ All models synchronized.');

    // Start backend server
    app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:8000`));
  } catch (err) {
    console.error('❌ Unable to start server:', err);
    process.exit(1);
  }
}

start();
