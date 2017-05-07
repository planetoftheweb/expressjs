let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let feedBackSchema = new Schema({
	name: String,
	message: String,
	date: { type: Date, default: Date.now() }
});

let inchatSchema = new Schema({
	name: String,
	message: String,
	date: { type: Date, default: Date.now() }
});


module.exports = {
	feedbacksSchema: mongoose.model('feedbacks', feedBackSchema),
	chatSchema: mongoose.model('chat', inchatSchema)
}