const { randomBytes } = require('crypto')
const axios = require('axios');
const posts = {};



//get all posts...controller..

exports.getAllPosts = (req, res) => {
    res.send(posts)
}


//create posts...controller....

exports.createPosts = async (req, res) => {
    //generating ids...
    const id = randomBytes(4).toString('hex');

    //extract the data from the req.body...

    const { title } = req.body;
    console.log(title);
    posts[id] = {
        id, title
    };
    //emit the event...request...to event bus..
    try {
        await axios.post('http://localhost:8005/events', {
            type: 'PostCreated',
            data: { id, title }
        })
        //send the response now..

        res.status(201).send(posts[id]);
    } catch (error) {
        console.log(error);
    }


}


exports.eventController = (req, res) => {
    console.log(`Received Event ${req.body.type}`);
    res.send({})
}