var mongoose = require('mongoose');
var User = require('../controllers/Users.js')();
var Poll = require('../controllers/Polls.js')();

module.exports = function(app){
	//user controller
	app.post('/users', User.create);

	// poll controller
	app.get('/polls', Poll.index);
	app.post('/polls', Poll.create);
	app.get('/polls/:id', Poll.show);
	app.put('/polls/:id', Poll.update);
	app.delete('/polls/:id', Poll.delete)
}


