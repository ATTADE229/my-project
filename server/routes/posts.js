const express = require('express');
const router = express.Router();

// Mock Database
let posts = [];

// CREATE a post
router.post('/', (req, res) => {
    const { title, content } = req.body;
    const newPost = { id: posts.length + 1, title, content, likes: 0, comments: [] };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// READ all posts
router.get('/', (req, res) => {
    res.json(posts);
});

// READ a single post
router.get('/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found');
    res.json(post);
});

// UPDATE a post
router.put('/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found');
    const { title, content } = req.body;
    post.title = title || post.title;
    post.content = content || post.content;
    res.json(post);
});

// DELETE a post
router.delete('/:id', (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex === -1) return res.status(404).send('Post not found');
    const deletedPost = posts.splice(postIndex, 1);
    res.json(deletedPost);
});

// LIKE a post
router.post('/:id/like', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found');
    post.likes += 1;
    res.json(post);
});

// COMMENT on a post
router.post('/:id/comment', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found');
    const { comment } = req.body;
    post.comments.push(comment);
    res.json(post);
});

module.exports = router;