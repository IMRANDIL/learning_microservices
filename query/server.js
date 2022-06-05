require('dotenv').config();

const express = require('express');
const cors = require('cors')
const axios = require('axios');
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//router ..middleware..


exports.handleEvent = (type, data) => {
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







app.use('/', require('./router/query'))




const PORT = process.env.PORT || 8009;

app.listen(PORT, async () => {
    console.log(`Query service is running on port: ${PORT} 😃`);

    const res = await axios.get('http://localhost:8005/events');

    for (let event of res.data) {
        console.log(`Processing Event: ${event.type}`);
        handleEvent(event.type, event.data)
    }
})