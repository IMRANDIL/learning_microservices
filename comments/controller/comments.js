const { randomBytes } = require('crypto')

const commentsByPostId = {};


//get all comments....


exports.getAllComments = (req, res) => {
    res.send(commentsByPostId[req.params.id] || [])
}



exports.createComments = (req, res) => {


    const { id } = req.params
    //generate random id..
    const commentId = randomBytes(4).toString('hex')
    //extract data from req.body..

    const { content } = req.body;
    const comments = commentsByPostId[id] || []

    comments.push({ id: commentId, content });

    commentsByPostId[id] = comments;
    res.status(201).send(comments);


}