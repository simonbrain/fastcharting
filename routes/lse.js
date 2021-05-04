"use strict";

const express = require("express");
let router = express.Router();

router
    .route("/")
    .get((req,res) => {
        res.send('This is the lse directory')
    })

module.exports = router;

