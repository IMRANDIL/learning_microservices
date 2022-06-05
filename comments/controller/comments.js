const { randomBytes } = require('crypto')
const axios = require('axios');

const commentsByPostId = {};


//get all comments....


exports.getAllComments = (req, res) => {
    res.send(commentsByPostId[req.params.id] || [])
}



exports.createComments = async (req, res) => {


    const { id } = req.params
    //generate random id..
    const commentId = randomBytes(4).toString('hex')
    //extract data from req.body..

    const { content } = req.body;
    console.log(content);
    const comments = commentsByPostId[id] || []

    comments.push({ id: commentId, content, status: 'pending' });

    commentsByPostId[id] = comments;

    //emit the events...to event bus..
    try {
        await axios.post('http://localhost:8005/events', {
            type: 'CommentCreated',
            data: {
                id: commentId,
                content,
                postId: id,
                status: 'pending'

            }
        })


        res.status(201).send(comments);

    } catch (error) {
        console.log(error);
    }



}



exports.eventController = (req, res) => {
    console.log(`received event ${req.body.type}`);
    res.send({})
}