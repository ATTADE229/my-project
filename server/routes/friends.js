const express = require('express');
const router = express.Router();

// Mock database for friends list
let friendsList = [];

// Endpoint to add a friend
router.post('/add', (req, res) => {
    const { userId, friendId } = req.body;
    if (!userId || !friendId) {
        return res.status(400).json({ message: 'User ID and Friend ID are required.' });
    }
    friendsList.push({ userId, friendId });
    return res.status(200).json({ message: 'Friend added successfully.' });
});

// Endpoint to remove a friend
router.delete('/remove', (req, res) => {
    const { userId, friendId } = req.body;
    if (!userId || !friendId) {
        return res.status(400).json({ message: 'User ID and Friend ID are required.' });
    }
    friendsList = friendsList.filter(friend => !(friend.userId === userId && friend.friendId === friendId));
    return res.status(200).json({ message: 'Friend removed successfully.' });
});

// Endpoint to get friends list
router.get('/list', (req, res) => {
    const { userId } = req.query;
    if (!userId) {
        return res.status(400).json({ message: 'User ID is required.' });
    }
    const userFriends = friendsList.filter(friend => friend.userId === userId);
    return res.status(200).json({ friends: userFriends });
});

// Endpoint to send friend request
router.post('/request', (req, res) => {
    const { userId, friendId } = req.body;
    if (!userId || !friendId) {
        return res.status(400).json({ message: 'User ID and Friend ID are required.' });
    }
    return res.status(200).json({ message: 'Friend request sent successfully.' });
});

module.exports = router;