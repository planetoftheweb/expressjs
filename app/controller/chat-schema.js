let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let inchatSchema = new Schema({
	name: String,
	message: String,
	date: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('chat', inchatSchema);

