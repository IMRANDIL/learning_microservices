const express = require('express');

const axios = require('axios');


const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.post('/events', (req, res) => {

})









app.listen(9005, () => {
    console.log(`server runs on port: 9005😄`);
})