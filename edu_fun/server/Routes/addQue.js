const express = require('express');
const querouter = express.Router();
const Quiz = require('../Models/Quiz');
const Question = require('../Models/Questions');

querouter.post('/api/quizzes', async (req, res) => {
  try {
    const { title, description, level, languageId } = req.body;
    const quiz = new Quiz({
      title,
      description,
      level,
      language: languageId,
      questions: [],
    });
    await quiz.save();
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

querouter.post('/api/quizzes/:quizId/questions', async (req, res) => {
  try {
    const { text, options, correctOption } = req.body;
    const quizId = req.params.quizId;

    const question = new Question({ text, options, correctOption });
    await question.save();

    const quiz = await Quiz.findById(quizId);
    quiz.questions.push(question._id);
    await quiz.save();

    res.json(question);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = querouter;