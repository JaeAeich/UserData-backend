const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	gender: {
		type: String,
	},
	mobile: {
		type: Number,
		required: true,
	},
});

module.exports = mongoose.model("user", userSchema);
