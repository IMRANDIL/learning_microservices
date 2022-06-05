const express = require('express');

const axios = require('axios');


const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.post('/events', async (req, res) => {
    const { type, data } = req.body;

    if (type === 'CommentCreated') {
        const status = data.content.includes('shit') ? 'rejected' : 'approved';
        await axios.post('http://localhost:8005/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                content: data.content,
                postId: data.postId,
                status: status
            }
        })
    }

    res.send({});

})









app.listen(9005, () => {
    console.log(`server runs on port: 9005😄`);
})