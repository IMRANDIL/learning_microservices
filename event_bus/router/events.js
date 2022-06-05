const router = require('express').Router();

const axios = require('axios');



const events = [];


router.get('/events', (req, res) => {
    res.send(events);
})






router.post('/events', (req, res) => {
    const event = req.body;
    events.push(event)
    try {
        axios.post('http://localhost:5000/events', event);
        axios.post('http://localhost:7000/events', event);
        axios.post('http://localhost:9000/events', event);
        axios.post('http://localhost:9005/events', event);

        res.send({ status: 'OK' })
    } catch (error) {
        console.log(error);
    }

})





module.exports = router;