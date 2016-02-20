var user = require('../contollers/users.js')
module.exports = function(app){
	app.get('/users',function(req,res){
		user.index(req,res)
		//returns all users from db
	});
	app.get('/users/:id', function(req,res){
		user.show(req,res)
		//returns detail for a user that matches user id
	});
	app.post('/users', function(req,res){
		// creates user
		user.create(req,res)
	});
	app.put('/users/:id',function(req,res){
		// updates information of a user
		user.update(req,res)
	})
	app.delete('/users/:id', function(req, res){
		// delete a user that matches id
		user.delete(req,res)
	})
	app.get('/users/new', function(req,res){
		// creates the form for adding new user
		user.new(req,res)
	})
	app.get('/users/:id/edit', function(req,res){
		//creates the form for editting user
		user.edit(req, res)
	})

}