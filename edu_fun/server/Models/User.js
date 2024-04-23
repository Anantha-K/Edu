const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    userid:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    CurrentlyLearning: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    currentStreak: { type: Number, default: 0 },
    score:{type:Number,default:0},
    maxStreak: { type: Number, default: 0 },
    totalQuizzesTaken: { type: Number, default: 0 },
    quizzesCompleted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }],
    mistakes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mistake' }],
}
)


const User = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = User;