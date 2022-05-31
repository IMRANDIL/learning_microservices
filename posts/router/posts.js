const router = require('express').Router();

const { getAllPosts, createPosts } = require('../controller/posts');




router.route('/posts').get(getAllPosts).post(createPosts);









module.exports = router;