const express = require("express");
const mongoose = require("mongoose");

var Suggestion = require("../models/suggestion");

const router = express.Router();

router.get("/",function(req,res){
	res.sendFile(__dirname + "/home.html");
});

module.exports = router;