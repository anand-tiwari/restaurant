app.controller('detailController', function($rootScope, $scope, $log, $uibModal,$state,ViewService) {

  $scope.food = [{
      "veg":[
        {
          "soups":[
            {
              "name":"veg hot sour soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            }
          ],
          "starters":[
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            }
          ],
          "Main Course":[
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            }
          ],
          "Beverages":[
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            }
          ],
          "Salads":[
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            }
          ],
          "combos":[
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            }
          ]
        }
      ]
      },
      {
      "non_veg":[
        {
          "soups":[
            {
              "name":"veg hot sour soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            }
          ],
          "starters":[
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            }
          ],
          "Main Course":[
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            }
          ],
          "Beverages":[
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            }
          ],
          "Salads":[
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            }
          ],
          "combos":[
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            },
            {
              "name":"veg clear soup",
              "price":"123"
            }
          ]
        }
      ]
    }];

  var selectedRestaurentData = JSON.parse(localStorage.getItem("item"));
  $scope.dataset = selectedRestaurentData.item;

  $scope.showItem = function(d){
      $scope.selectedType  = d;
  };

  $scope.addTable = function(){
      var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'views/partials/bookTable.html',
          controller: 'bookTableCtrl'
        });

      modalInstance.result.then(function(bookingInfo) {
          console.log(bookingInfo, "bookingInfo");
          localStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));
        }, function() {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

});