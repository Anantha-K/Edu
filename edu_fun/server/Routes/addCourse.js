const express = require('express');
const courseRouter = express.Router();
const Course = require('../Models/Course');
const Quiz = require('../Models/Quiz');

courseRouter.post('/api/courses', async (req, res) => {
  try {
    const { quizId } = req.body;
    const course = new Course({
      quiz: quizId,
    });
    await course.save();
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
});

courseRouter.post('/api/courses/:courseId/quizzes', async (req, res) => {
  try {
    const { quizId } = req.body;
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    course.quizzes.push(quizId);
    await course.save();
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
});

module.exports = courseRouter;
