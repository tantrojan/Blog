const express = require("express");
const app = express();

app.use(express.static("static"));
app.get("/",require("./routes/home"));

app.listen(3000,function(){
	console.log("Listening to port 3000");
});