var authorSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: {
		firstName: String,
		lastName: String
	},
	biography: String,
	created: {
		type: Date,
		default: Date.now
	}
});

var bookSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	title: String,
	summary: String,
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Author'
	},
	created: {
		type: Date,
		default: Date.now
	}
});

module.exports = {
	authorSchema,
	bookSchema
}