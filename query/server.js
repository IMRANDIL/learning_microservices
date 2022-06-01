require('dotenv').config();

const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//router ..middleware..

app.use('/', require('./router/query'))




const PORT = process.env.PORT || 8009;

app.listen(PORT, () => {
    console.log(`Query service is running on port: ${PORT} 😃`);
})