const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var suggestionSchema = new Schema({
	title: {type: String, required: true},
    body: {type: String, required: true}
    date: {type: Date, default: Date.now },
})

var Suggestion = mongoose.model("Suggestion", suggestionSchema);