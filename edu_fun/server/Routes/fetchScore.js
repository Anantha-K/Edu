const express = require('express');
const scoreRouter = express.Router();
const User = require('../Models/User');

scoreRouter.post('/api/user/updateScore', async (req, res) => {
    try {
        const { userId, score } = req.body;
        const user = await User.findOneAndUpdate(
            { _id: userId },
            { $inc: { score: score } },
            { new: true }
        );
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err });
    }
});

scoreRouter.post('/api/user/resetScore', async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await User.findOneAndUpdate(
            { _id: userId },
            { score: 0 },
            { new: true }
        );
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err });
    }
});


scoreRouter.get('/api/user/fetchScore', async (req, res) => {
    try {
        const user = await User.findOne();
        if (!user) {
            return res.status(404).json({ message: 'No users found' });
        }
        res.json({ score: user.score });
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err });
    }
});

module.exports = scoreRouter;
