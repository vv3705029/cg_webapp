const mongoose = require("mongoose");

const quizResultSchema = new mongoose.Schema(
  {
    bigFiveScores: {
      O: { type: Number, default: 0 }, // Openness
      C: { type: Number, default: 0 }, // Conscientiousness
      E: { type: Number, default: 0 }, // Extraversion
      A: { type: Number, default: 0 }, // Agreeableness
      N: { type: Number, default: 0 }, // Neuroticism
    },
    riasecScores: {
      R: { type: Number, default: 0 }, // Realistic
      I: { type: Number, default: 0 }, // Investigative
      A: { type: Number, default: 0 }, // Artistic
      S: { type: Number, default: 0 }, // Social
      E: { type: Number, default: 0 }, // Enterprising
      C: { type: Number, default: 0 }, // Conventional
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("QuizResult", quizResultSchema);
