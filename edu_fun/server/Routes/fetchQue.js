const express = require('express');
const questionsRouter = express.Router();
const Question = require('../Models/Questions');

questionsRouter.get('/api/questions', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
});

module.exports = questionsRouter;
