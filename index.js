const express = require("express");
const app = express();

const {Book} = require("./models");

app.get('/books', (_, res) => {
	const query = {
		where: {author: 'Simon Sinek'}
	}
	Book.findAll(query)
		.then(books => {
			res.send(books)
		})
		.catch(err => console.log(err))
})

app.listen(3000, () => {
	console.log('listening to port 3000')
})