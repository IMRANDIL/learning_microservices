const router = require('express').Router();

const { getAllPosts, createPosts, eventController } = require('../controller/posts');




router.route('/posts').get(getAllPosts).post(createPosts);

router.post('/events', eventController)







module.exports = router;