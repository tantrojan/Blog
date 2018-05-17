const express = require("express");
const router = express.Router();
var Suggestion = require("../models/suggestion");


router.get("/",function(req,res){
	var query = Suggestion.find();
	query.exec(function(err,result){
		if(err){
			res.send("NO SUGGESTIONS ARE THERE.");
		}
		else
		{
			res.render("suggpage.ejs",{ result : result } );
		}
	})
	
});

module.exports = router;