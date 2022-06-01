require('dotenv').config();

const express = require('express');


const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route ..

app.use('/', require('./router/events'))






//listen on some port..

app.listen(8005, () => {
    console.log(`server runs on port: 8005😆`);
})