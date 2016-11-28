
var vehicleCtrl= function($scope,vehicleSvc){
    vehicleSvc.getVehicles().success(function(response){
      console.log(response); 
        $scope.vehicles= response.vehicles;
    })
    .error(function(errorResponse){
      console.log(response);;  
    });
};

angular.module('vehicles')
.controller('vehicleCtrl',['$scope','vehicleSvc',vehicleCtrl])