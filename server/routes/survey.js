const express = require("express");
const router = express.Router();
const {
  submitSurvey,
  getAllSurveys,
  getSurveyById,
  updateSurvey,
} = require("../controllers/SurveyController");

// Base URL: /api/survey
router.post("/submit", submitSurvey);
router.get("/", getAllSurveys);
router.get("/:id", getSurveyById);
router.put("/:id", updateSurvey);

module.exports = router;
