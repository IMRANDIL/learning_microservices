const router = require('express').Router();
const { getAllComments, createComments, eventController } = require('../controller/comments');


router.route('/posts/:id/comments').get(getAllComments).post(createComments);


router.post('/events', eventController)






module.exports = router;