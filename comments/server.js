require('dotenv').config();


const express = require('express');

const cors = require('cors');

const app = express();


//some middleware...
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//route middleware...

app.use('/', require('./router/comments'))





//server listening..

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`server listens on port: ${PORT}😄`);
})