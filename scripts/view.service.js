app.factory('ViewService', function ($http, $state, $log,$q) {
            function getApiData(){
                var deferred = $q.defer();
                $http({
                    url:'http://localhost:3003/restaurants.json',
                    method: "GET",
                }).success(function(response, status, headers, config){
                    deferred.resolve({
                        status: status,
                        data: response
                    });
                }).error(function(response, status, headers, config){
                    deferred.reject({
                        status: status,
                        data: response
                    });
                });      
            	return deferred.promise;
            };
    return{
        getApiData:getApiData,
    };
});