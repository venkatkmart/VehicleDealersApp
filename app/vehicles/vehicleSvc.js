
var vehicleSvcFn= function($http){
    this.getVehicles = function(){
        return $http.get('app/data/vehicles.json')
    }
};

angular.module('vehicles')
.service('vehicleSvc',['$http',vehicleSvcFn])