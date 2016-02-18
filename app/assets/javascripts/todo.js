


		angular
  .module ('todo', ['ngRoute'])
		.config(function($routeProvider, $locationProvider){
		$routeProvider
						.when ('/:id', {
				templateUrl: 'lists.html',
			//	template: '<h1>you got it</h1>',
				controller: 'listsController',
				controllerAs: 'Ctrl',
		})
						.when ('/:id/todos', {
				templateUrl: 'todos.html',
			//	template: '<h1>you got it</h1>',
				controller: 'todosController',
				controllerAs: 'Ctrl',
		})
						.when ('/', {
				templateUrl: 'angularRoot.html',
			//	template: '<h1>you got it</h1>',
				controller: 'rootController',
				controllerAs: 'rootCtrl',
		}).
      otherwise({
        redirectTo: '/'
      });
		// $locationProvider.html5Mode(true);
		})
  .controller ('todosController', ['$scope', '$http', '$location','$routeParams',function($scope, $http, $location,$routeParams){

	     console.log('todos  Controllercalled');
		  //$scope.todosList = {this: 'this',is:'is',test: 'test'};
		  $scope.todos = [];
		$scope.test = {abs: $location.absUrl(), rel: $location.url()}
	   $http.get('todos_json', {params: $routeParams}).then(function(data){
		   $scope.todos = data.data;
	   });
	  $scope.todo = {name: 'new task', list: $routeParams['id']}
		  $scope.add =function(){

		  $http.get('/todos/new', {params: $scope.todo}).then(function(d){
			      console.log ('d');  //marker

			$scope.todos = (d.data)
		  })

	  }
	  $scope.delete = function(id){
		      console.log ('id');  //marker
			    console.log ( id );
		  params = {id: id};
		  var url = '/todos/' + id
		  $http.delete(url).then(function(d){
			      console.log ('d');  //marker
				    console.log ( d );
			  $scope.todos = d.data;
		  })
	  }

  }])
.controller('rootController',['$scope', function($scope){

}])
  .controller ('listsController', ['$scope', '$http', '$location','$routeParams',function($scope, $http, $location, $routeParams){
	     console.log('lists Controllercalled');
		  $scope.params = $routeParams;
		  $scope.lists = [];
		$scope.test = {abs: $location.absUrl(), rel: $location.url()}
	   $http.get('/todos_lists_json').then(function(data){
		   $scope.lists = data.data;
	   });
$scope.newList = {name: '', todos_count: 0}
	  $scope.add =function(){
		  $http.get('new_list', {params: $scope.newList}).then(function(d){
			      console.log ('d');  //marker
			    console.log ( d );
		  })
		  $scope.lists.push($scope.newList)
	  }


  }]);


