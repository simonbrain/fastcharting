"use strict";

const express = require("express");
let router = express.Router();
const axios = require('axios');



router
    .get("/",(req,res) => {
        res.send('This is the data directory')
    })

router
    .get("/lse",(req,res) => {
            const getLonData = async() => {
                try {
                    const response = await axios.get(
                        'http://storage.cloud.google.com/charting-lon-bucket/lse/test_lse.json?authuser=2'
                    )
                    res.send(response.data)
                    //console.log(response)
                }
                catch (error){
                    console.log(error)
                }
            }
            getLonData()
        //res.send('This is the lse directory')
        //res.send()
    })


module.exports = router;

