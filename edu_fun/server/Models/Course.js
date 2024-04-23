const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    courseName:{type:String},
    quiz: { type: Number, ref: 'Quiz', required: true },
  
  });


const Course = mongoose.model("Course",CourseSchema);
module.exports = Course;