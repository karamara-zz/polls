var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var Schema = mongoose.Schema;
var questionValidator = [
validate({
		validator:"isLength",
		arguments : [8,255],
		message: 'Answer should at least be {ARG[0]} character and no longer then {ARG[1]}'
	})
	]
var optionValidator = [
validate({
		validator:"isLength",
		arguments : [3,255],
		message: 'Answer should at least be {ARG[0]} character and no longer then {ARG[1]}'
	})
	]
var pollSchema = new Schema({
	name: String,
	question: {type: String, required: true, validate: questionValidator},
	created_at: {
		type: Date,
		default: Date.now()
	},
	options:[{
		option: {type: String, required: true, validate: optionValidator},
		count: Number
	}]
})

mongoose.model("Poll", pollSchema);

