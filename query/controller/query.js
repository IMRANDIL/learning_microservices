const { handleEvent, posts } = require('../server');







exports.postEventsController = (req, res) => {
    //extract data from the req.body..
    const { type, data } = req.body;
    handleEvent(type, data)


    res.send({});
}


exports.getEventsController = (req, res) => {
    res.send(posts);
}

