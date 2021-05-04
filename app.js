'use strict';

const express = require('express');
const app = express();
const axios = require('axios');
const lse = require("./routes/lse");

app.use("/lse",lse);

//app.get('/', (req, res) => {
app.get('/', (req, res) => {
    res.send('Hello Simon this is the root directory')
  //res.status(200).send('Hello, Fastcharts!').end();
  
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {  
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;
