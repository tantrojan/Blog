const express = require("express");
const router = express.Router();

var Suggestion = require("../models/suggestion");


router.get("/",(req,res)=>{
	res.render("home.ejs", { qs: req.query });
});

router.post("/",(req,res)=>{
	console.log(req.body);
	var entry = new Suggestion(req.body);
	entry.save(function(error) {
	 	if (error) {
	     	console.error(error);
		}
		else
		{
			console.log("Your entry has been saved!");
		}
	});
	res.render("home.ejs");
})

module.exports = router; 

