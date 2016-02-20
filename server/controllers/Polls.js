
var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
var User = mongoose.model('User');
module.exports = function(){
	return{
		index: function(req, res){
			Poll.find({}, function(err,polls){
				if (err){
					console.log(err)
				} else {
					res.json(polls)
				}
			})
		},
		create: function(req, res){
			console.log(req.body)
			var options = [{
				option:req.body.option1,
				count:1
			},{
				option:req.body.option2,
				count:1
			},{
				option:req.body.option3,
				count:1
			},{
				option:req.body.option4,
				count:1
			}]
			var newPoll = new Poll({
				name :req.body.name,
				question: req.body.question,
				options: options
			})
			console.log(newPoll)
			newPoll.save(function(err){
				if (err){
					console.log(err)
				} else {
					res.json({})
				}
			})
		},
		show: function(req, res){
			console.log(req.params.id)
			Poll.findOne({_id: req.params.id}, function(err, poll){
				if(err){
					console.log(err);
				} else {
					res.json(poll);
				}
			})
		},
		update:function(req, res){
			console.log(req.body, req.params.id)
			console.log(req.body)
			Poll.update({'options._id':req.body._id}, {'$inc':{'options.$.count':1}}, function(err){
				if(err){
					console.log(err)
				} else {
					res.json({});
				}
			})
		},
		delete: function(req, res){
			console.log("delete works", req.params.id)
			Poll.remove({_id: req.params.id},function(err){
				if(err){
					console.log(err)
				} else {
					res.json({})
				}
			})
		}
	}
}