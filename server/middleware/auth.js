'use strict';

const jwt = require('jsonwebtoken');
const config = require('../config');

// Middleware to protect routes
module.exports = function(req, res, next) {
    // Get token from the headers
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'No token provided!' });
    }

    // Verify token
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized!' });
        }
        // Save user info in request for use in other routes
        req.userId = decoded.id;
        next();
    });
};
