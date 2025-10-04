const QuizResult = require("../models/QuizResult");

// Save quiz results
exports.saveQuizResult = async (req, res) => {
  try {
    const { bigFiveScores, riasecScores } = req.body;

    if (!bigFiveScores || !riasecScores) {
      return res.status(400).json({ error: "Missing scores" });
    }

    const result = new QuizResult({ bigFiveScores, riasecScores });
    await result.save();

    res.status(201).json({
      message: "Quiz result saved successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all results
exports.getAllQuizResults = async (req, res) => {
  try {
    const results = await QuizResult.find().sort({ createdAt: -1 });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
