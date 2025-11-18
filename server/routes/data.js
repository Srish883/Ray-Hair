const express = require("express");
const router = express.Router();

// GET endpoint to return some data
router.get("/data", async (req, res) => {
  try {
    const sampleData = {
      message: "Data fetched successfully",
      items: [1, 2, 3, 4],
    };

    res.json(sampleData);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
