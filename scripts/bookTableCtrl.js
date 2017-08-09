app.controller('bookTableCtrl', function($scope, $uibModalInstance, $state) {

  $scope.bookingInfo = {
  };

  $scope.submitForm = function(bookingForm){
    if(bookingForm.$invalid)
      return;
    $scope.ok();
  };

  $scope.ok = function() {
      $uibModalInstance.close($scope.bookingInfo);
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});