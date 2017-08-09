

app.controller('addRestaurantCtrl', function($scope, $uibModalInstance, $state) {

  $scope.options = [{ name: "veg", id: 1 }, { name: "non-veg", id: 2 },{ name: "both", id: 3 }];
 
  $scope.restaurantObject = {
    "type":$scope.options[0]
  };

  $scope.addRestaurant = function(addRestaurantForm){
    if(addRestaurantForm.$invalid)
      return;
    $scope.ok();
  };

  $scope.ok = function() {
      $uibModalInstance.close($scope.restaurantObject);
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});
