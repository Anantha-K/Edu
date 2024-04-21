const mongoose = require("Mongoose");


const quizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    level: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
    Course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
    completedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  });



  const Quiz = mongoose.model("Quiz",quizSchema);
  module.exports = Quiz;