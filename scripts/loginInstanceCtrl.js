app.controller('loginInstanceCtrl', function($scope, $uibModalInstance, $state) {

  $scope.user = {
      "username":"vahid",
      "password":"12345678"
  };
  $scope.errorMessage = false;
  $scope.submitForm = function(loginForm){
    if(loginForm.$invalid)
      return;
    var credentials = JSON.parse(localStorage.getItem("credentials")); 
    if(credentials.username == $scope.user.username && credentials.password == $scope.user.password){
        $scope.ok();
    }
    else{
      $scope.errorMessage = true;
    }
    console.log($scope.user);
  };

  $scope.ok = function() {
      $uibModalInstance.close($scope.user);
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});