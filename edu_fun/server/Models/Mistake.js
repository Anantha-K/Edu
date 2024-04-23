const mongoose = require('mongoose');

const mistakeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
    userAnswer: { type: String, required: true },
    correctAnswer: { type: String, required: true },
    Course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    quizTitle: { type: String },
    timestamp: { type: Date, default: Date.now },
  });


const Mistakes = mongoose.model("Mistakes",mistakeSchema);
module.exports = Mistakes;