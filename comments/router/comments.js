const router = require('express').Router();
const { getAllComments, createComments } = require('../controller/comments');


router.route('/posts/:id/comments').get(getAllComments).post(createComments);









module.exports = router;