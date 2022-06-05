
const posts = {}


const handleEvent = (type, data) => {
    if (type === 'PostCreated') {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] }
    }

    if (type === 'CommentCreated') {
        const { id, content, postId, status } = data;

        const post = posts[postId];
        post.comments.push({ id, content, status });
    }

    if (type === 'CommentUpdated') {
        const { id, content, postId, status } = data;
        const post = posts[postId];
        const comment = post.comments.find((comment) => {
            return comment.id === id;
        });
        comment.status = status;
        comment.content = content;
    }


}




exports.postEventsController = (req, res) => {
    //extract data from the req.body..
    const { type, data } = req.body;
    handleEvent(type, data)


    res.send({});
}


exports.getEventsController = (req, res) => {
    res.send(posts);
}

