'use strict';

const express = require('express');
const app = express();
const axios = require('axios');
const data = require("./routes/data");
const info = require("./routes/info");

app.use(express.static('public'));
app.use("/data",data);
app.use("/info",info);

//app.get('/', (req, res) => {
app.get('/', (req, res) => {
    
    //res.sendFile(path.join(__dirname, '/index.html'));
    res.status(200).send('Hello, Fastcharts!').end();
  
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {  
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;
