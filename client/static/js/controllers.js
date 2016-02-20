pollApp.controller('userController',['UserFactory',function(UserFactory){
	var _this = this;
	this.login = function(newUser){
		UserFactory.create(newUser, function(data){
		_this.user = data;
		_this.newUser = {};
		})
	}
}])
.controller('pollController', ['PollFactory','UserFactory', function(PollFactory,UserFactory){
	_this = this;
	if (!UserFactory.user){
		UserFactory.loginCheck()
	}
	this.user = UserFactory.user
	this.index = function(){
		PollFactory.index(function(data){
			_this.polls = data;
		})
	}
	this.index()
	this.create = function(newQuestion){
		console.log(newQuestion)
		newQuestion.name = UserFactory.user.name
		PollFactory.create(newQuestion, function(){
			_this.index()
		})
	};
	this.show = function(pollId){
		console.log(pollId)
		PollFactory.show(pollId, function(data){
			_this.poll = data;
		});
	}
	this.delete = function(poll){
		console.log(poll)
		PollFactory.delete(poll, function(){
			_this.index()
		})
	}
	this.vote = function(option){
		PollFactory.update(option, function(){
			_this.show(_this.poll._id)
		})
	}
	this.logout= function(){
		UserFactory.logout()
	}
}])