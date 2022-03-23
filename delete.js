const { Op } = require('sequelize');
const {Book} = require('./models')

const query = {
	where: {
		name: {
			[Op.startsWith]: ['You']
		}
	}
}

Book
.destroy(query) 
.then(()=> console.log('successfully deleted data'))
.catch(err => console.log(err))