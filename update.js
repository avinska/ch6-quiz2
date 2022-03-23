const {Book} = require('./models')

const query = {
	where: {is_published: false}
}

Book
.update({is_published: true}, query) 
.then(() => console.log('successfully updated data'))
.catch(err => console.log(err))
