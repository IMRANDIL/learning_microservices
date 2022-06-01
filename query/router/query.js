const { postEventsController, getEventsController } = require('../controller/query');

const router = require('express').Router();



router.post('/events', postEventsController)


router.get('/posts', getEventsController)




module.exports = router;