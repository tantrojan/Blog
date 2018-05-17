const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//DATA CONNECTION
var DB = "mongodb://localhost/Blog";
mongoose.connect(DB);


//BODYPARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//STATIC FILES
app.use(express.static("static"));

//ROUTING
app.use("/",require("./routes/home"));

app.listen(3000,(req,res)=>{
	console.log("Listening to port 3000");
});

console.log("Evrything is working fine ");
