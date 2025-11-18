const Survey = require("../models/Survey");


exports.submitSurvey = async (req, res) => {
  try {
    const data = req.body;

    // basic validation
    if (!data.hairType || !data.scalpType) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    const survey = await Survey.create(data);
    res.status(201).json({
      message: "Survey submitted successfully",
      survey,
    });
  } catch (error) {
    console.error("Survey Submission Error:", error);
    res.status(500).json({
      message: "Error submitting survey",
      error: error.message,
    });
  }
};


exports.getAllSurveys = async (req, res) => {
  try {
    const surveys = await Survey.findAll({ order: [["createdAt", "DESC"]] });
    res.json(surveys);
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ message: "Error fetching surveys" });
  }
};


exports.getSurveyById = async (req, res) => {
  try {
    const survey = await Survey.findByPk(req.params.id);
    if (!survey) {
      return res.status(404).json({ message: "Survey not found" });
    }
    res.json(survey);
  } catch (error) {
    res.status(500).json({ message: "Error fetching survey" });
  }
};


exports.updateSurvey = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const survey = await Survey.findByPk(id);
    if (!survey) return res.status(404).json({ message: "Survey not found" });

    await survey.update(data);
    res.json({ message: "Survey updated successfully", survey });
  } catch (error) {
    res.status(500).json({ message: "Error updating survey" });
  }
};
