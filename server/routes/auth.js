const express = require('express');
const router = express.Router();

// Mock database for user credentials
const users = {};

// Login endpoint
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (users[username] && users[username] === password) {
        return res.json({ message: 'Login successful!'});
    }
    return res.status(401).json({ message: 'Invalid username or password.' });
});

// Signup endpoint
router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    if (users[username]) {
        return res.status(409).json({ message: 'User already exists.' });
    }
    users[username] = password;
    return res.status(201).json({ message: 'User created successfully!'});
});

// Logout endpoint
router.post('/logout', (req, res) => {
    return res.json({ message: 'Logout successful!'});
});

module.exports = router;
