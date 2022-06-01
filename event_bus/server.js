require('dotenv').config();

const express = require('express');


const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route ..

app.use('/', require('./router/events'))






//listen on some port..

app.listen(process.env.PORT || 8005, () => {
    console.log(`server runs on port: ${process.env.PORT || 8005}😆`);
})