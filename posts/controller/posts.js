const { randomBytes } = require('crypto')

const posts = {};



//get all posts...controller..

exports.getAllPosts = (req, res) => {
    res.send(posts)
}


//create posts...controller....

exports.createPosts = (req, res) => {
    //generating ids...
    const id = randomBytes(4).toString('hex');

    //extract the data from the req.body...

    const { title } = req.body;

    posts[id] = {
        id, title
    };

    //send the response now..

    res.status(201).send(posts[id]);

}