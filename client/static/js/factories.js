pollApp.factory('UserFactory',['$http',"$location","$window",function($http, $location,$window){
	console.log('userFactory kicks in ')
	var factory = {};
	factory.create = function(user, callback){
		$http.post('/users', user).success(function(data){
			factory.user = data;
			callback(factory.user);
			$location.url('/dashboard')
		})
	}
	factory.logout = function(){
		console.log('logout')
		$window.location.href='/'
	}
	factory.loginCheck = function(){
		$location.url('/')
	}
	return factory;

}])
.factory("PollFactory",['$http',"$location",function($http,$location){
	var factory={};
	console.log('poll factory kicks in')
	factory.index = function(callback){
		$http.get('/polls').success(function(data){
			factory.polls = data;
			console.log(data)
			callback(factory.polls);
		})
	}
	factory.create = function(newQuestion, callback){
		$http.post('/polls',newQuestion).then(function(data){
			console.log(data)
			callback()
			$location.url('/dashboard');
		})
	}
	factory.show = function(pollId, callback){
		$http.get('/polls/'+pollId).then(function(data){
			console.log(data)
			factory.poll = data.data;
			callback(factory.poll)
			$location.url('/vote')
		})
	}
	factory.update = function(option, callback){
		console.log(factory.poll)
		$http.put('/polls/'+factory.poll._id, option).then(function(data){
			callback()
		})
	}
	factory.delete = function(poll, callback){
		$http.delete('/polls/'+poll._id).then(function(){
			callback()
		})
	}

	return factory;
}])