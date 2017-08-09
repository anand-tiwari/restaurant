app.controller('signupInstanceCtrl', function($scope, $uibModalInstance, $state) {

  $scope.user = {};

  $scope.errorMessage = false;
  $scope.submitForm = function(signupForm){
    if(signupForm.$invalid)
      return;
      $scope.ok();
  };

  $scope.ok = function() {
      $uibModalInstance.close($scope.user);
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };

});