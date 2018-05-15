const express = require("express");
const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost/blog")

const app = express();

app.use(express.static("static"));
app.get("/",require("./routes/home"));

app.listen(3000,function(){
	console.log("Listening to port 3000");
});