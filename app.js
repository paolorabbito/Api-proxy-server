const express = require('express');
const rateLimit = require("express-rate-limit");
require('dotenv').config();
const apiRouter = require('./routes/api')
const app = express();
const cors = require('cors');

//Limiting request's number from single terminal
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10 // limit each IP to 100 requests per windowMs
  });


app.use(limiter);

//To use client in public folder as entry point
app.use(express.static('./public'));

app.use(express.json())

//app.use(cors())

app.use('/', apiRouter);

app.listen(3000, () => console.log('Listening on port 3000'));



