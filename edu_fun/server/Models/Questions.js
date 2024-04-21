const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    que: { type: String, required: true }, 
    options: [{ type: String, required: true }],
    ans: { type: String, required: true },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
