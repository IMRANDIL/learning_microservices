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

    comments.push({ id: commentId, content });

    commentsByPostId[id] = comments;

    //emit the events...to event bus..
    try {
        await axios.post('http://localhost:8005/events', {
            type: 'commentCreated',
            data: {
                id: commentId,
                content,
                postId: id
            }
        })


        res.status(201).send(comments);

    } catch (error) {
        console.log(error);
    }



}