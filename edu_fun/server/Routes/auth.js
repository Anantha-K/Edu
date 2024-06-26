const express = require("express");
const authRouter = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// authRouter.post("/api/Signup", async (req, res) => {
//   try {
//     const { name, username, password } = req.body;

//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: "User Already Exists" });
//     }

//     const hashed = await bcryptjs.hash(password, 8);
//     let user = new User({
//       name,
//       username,
//       password: hashed,
//     });
//     user = await user.save();
//     res.json(user);
//   } catch (e) {
//     res.status(500).json({ message: "Server Error" + e});
//   }
// });

authRouter.post("/api/Signup", async (req, res) => {
  try {
    const userData = {
      name: "John Doe",
      userid: "john123",
      email: "john@example.com",
      password: "password123",
      CurrentlyLearning: [],
      currentStreak: 0,
      score: 0,
      maxStreak: 0,
      totalQuizzesTaken: 0,
      quizzesCompleted: [],
      mistakes: []
    };

    const existingUser = await User.findOne({ userid: userData.userid });
    if (existingUser) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    const hashedPassword = await bcryptjs.hash(userData.password, 8);

    const newUser = new User({
      name: userData.name,
      userid: userData.userid,
      email: userData.email,
      password: hashedPassword,
      CurrentlyLearning: userData.CurrentlyLearning,
      currentStreak: userData.currentStreak,
      score: userData.score,
      maxStreak: userData.maxStreak,
      totalQuizzesTaken: userData.totalQuizzesTaken,
      quizzesCompleted: userData.quizzesCompleted,
      mistakes: userData.mistakes
    });

    await newUser.save();

    res.json(newUser);
  } catch (e) {
    res.status(500).json({ message: "Server Error" + e });
  }
});
authRouter.post("/api/Signin", async (req, res) => {
  try {
    const { userid, password } = req.body;

    const user = await User.findOne({ userid });

    if (!user) {
      return res.status(400).json({ message: "User Does not Exist" });
    }

    const match = await bcryptjs.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    const token = jwt.sign({ id: user._id }, "passwordKey");
    res.json({ token, ...user._doc });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = authRouter;
