
var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = function(){
	return{
		create:function(req, res){
			console.log(req.body)
			User.findOne({name: req.body.name}, function(err, user){
				if (err){
					console.log(err);
				} else if (user){
					res.json(user);
				} else {
					var newUser = new User(req.body);
					newUser.save(function(err, user){
						if (err){
							console.log(err)
						} else{
							console.log(user, newUser)
							res.json(newUser);
						}
					})
				}
			})
		}
	}
}