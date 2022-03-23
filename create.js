const {Book} = require('./models')
const book = require('./models/book.js')

Book
	.bulkCreate([{
		name: 'The art of not giving a fuck',
		author: 'Mark Manson',
		price: 267000,
		is_published: false,
	}, 
	{
		name: 'The power of now',
		author: 'Eckhart Tolle',
		price: 201365,
		is_published: true,
	}])
	.then((entry) => {
		console.log(`successfully added ${entry.length} entries`)
		console.log(entry)
	})
	.catch(err => console.log(err))