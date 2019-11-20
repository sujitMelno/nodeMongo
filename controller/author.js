var authBook = require('../module/authBook');

const authorSchema = mongoose.model('Author', authBook.authorSchema);
const bookSchema = mongoose.model('Book', authBook.bookSchema);

let save = (req, res) => {
	var jamieAuthor = new authorSchema({
		_id: new mongoose.Types.ObjectId(),
		name: {
			firstName: 'Jamie',
			lastName: 'Munro'
		},
		biography: 'Jamie is the author of ASP.NET MVC 5 with Bootstrap and Knockout.js.',
	});
	jamieAuthor.save(function (err) {
		if (err) throw err;

		console.log('Author successfully saved.');

		var mvcBook = new bookSchema({
			_id: new mongoose.Types.ObjectId(),
			title: 'ASP.NET MVC 5 with Bootstrap and Knockout.js',
			author: jamieAuthor._id,
			summary: 'Great read'

		});

		mvcBook.save(function (err) {
			if (err) throw err;

			console.log('Book successfully saved.');
		});
	});
}
//save();

module.exports = {
	save
} 