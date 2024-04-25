const express = require('express');
const querouter = express.Router();
const Quiz = require('../Models/Quiz');
const Question = require('../Models/Questions');

querouter.post('/api/quizzes', async (req, res) => {
  try {
    const { title, description, level, courseId } = req.body;
    const quiz = new Quiz({
      title,
      description,
      level,
      course: courseId,
      questions: [],
    });
    await quiz.save();
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' + err });
  }
});

querouter.post('/api/quizzes/questions', async (req, res) => {
  try {
    const { que, option1,option2,option3,option4, ans } = req.body;
    // const quizId = req.params.quizId;

    const question = new Question({ que, option1,option2,option3,option4, ans });
    await question.save();

    // const quiz = await Quiz.findById(quizId);
    // quiz.questions.push(question._id);
    // await quiz.save();

    res.json(question);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' +err});
  }
});

module.exports = querouter;