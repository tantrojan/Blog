const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var suggestionSchema = new Schema({
	name: {type: String, required: true},
    body: {type: String, required: true},
    date: {type: Date, default: Date.now },
})

module.exports = mongoose.model("Suggestion", suggestionSchema);