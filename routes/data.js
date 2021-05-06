"use strict";

const express = require("express");
let router = express.Router();

router
    .get("/",(req,res) => {
        res.send('This is the data directory')
    })

router
    .get("/lse",(req,res) => {
        res.send('This is the lse directory')
    })


module.exports = router;

