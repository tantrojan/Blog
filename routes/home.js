const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
	res.render("home.ejs", { qs: req.query });
});

router.post("/",(req,res)=>{
	console.log(req.body);
	res.render("home.ejs");
})

module.exports = router; 

