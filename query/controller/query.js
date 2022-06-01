
const posts = {}

exports.postEventsController = (req, res) => {
    //extract data from the req.body..
    const { type, data } = req.body;
    if (type === 'PostCreated') {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] }
    }

    if (type === 'CommentCreated') {
        const { id, content, postId } = data;

        const post = posts[postId];
        post.comments.push({ id, content });
    }

    res.send({});
}


exports.getEventsController = (req, res) => {

}