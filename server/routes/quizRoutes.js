const express = require("express");
const router = express.Router();
const {
  saveQuizResult,
  getAllQuizResults,
} = require("../controllers/quizController");

router.post("/", saveQuizResult);
router.get("/", getAllQuizResults);

module.exports = router;
