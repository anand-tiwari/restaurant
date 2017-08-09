var app = angular.module('AngularApp', ['ui.bootstrap','ui.router','ngMessages']);

app.controller('AppController', function($rootScope, $scope, $log, $uibModal,$state,ViewService) {

// static login credentials     
  var credentials = {
    username: "vahid",
    password: "12345678"
  };
  localStorage.setItem("credentials", JSON.stringify(credentials));


    //    login form modal box open 
    $scope.animationsEnabled = true;
    $scope.login = function() {
      var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'views/partials/login_form.html',
          controller: 'loginInstanceCtrl'
        });

      modalInstance.result.then(function(userData) {
          console.log(userData, "userData");
          $state.go('dashboard');
        }, function() {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };


    //.    signup function 
    $scope.signUp = function() {
      var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'views/partials/signup.html',
          controller: 'signupInstanceCtrl'
        });

      modalInstance.result.then(function(userData) {
          console.log(userData, "userData");
          $state.go('dashboard');
        }, function() {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.logout = function(){
      $state.go('login');
    };

    // get restaurant data 
    if (localStorage.getItem("data") === null) {
      ViewService.getApiData().then(function(response){
          $scope.data = response.data;
          if (localStorage.getItem("data") === null) {
              localStorage.setItem("data", JSON.stringify($scope.data));
          }
          console.log("success!", $scope.data);
      });
    }else{
      $scope.data = JSON.parse(localStorage.getItem("data"));
    }


    // add Restaurant
    $scope.addDashboard = function(){
      var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'views/partials/add_restaurent.html',
          controller: 'addRestaurantCtrl'
        });

      modalInstance.result.then(function(restaurantObject) {
          console.log(restaurantObject, "restaurantObject");
          $scope.data.push(restaurantObject);
          localStorage.setItem("data", JSON.stringify($scope.data));
        }, function() {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };



    // detail of restaurant 
    $scope.restaurantDetail = function(item,index){
      localStorage.setItem("item", JSON.stringify({"item":item,"index":index}));
        $state.go('about');
    };


});




app.config(function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise("/");
    
  $stateProvider
    .state('login', {
    url: "/",
    templateUrl: "views/login.html",
    title:'Login',
    controller:"AppController"
    })
  
    .state('dashboard', {
    url: "/dashboard",
    templateUrl: "views/dashboard.html",
    title:'Dashboard View',
    controller:"AppController"
    })

    .state('about', {
    url: "/about",
    templateUrl: "views/about.html",
    title:'About View',
    controller:"detailController"
    });
});
