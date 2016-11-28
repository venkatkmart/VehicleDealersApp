var navbarSvc = function ($http, $q) {
    this.getTabs = function () {
        return $http.get('app/data/tabs.json');
    };
    this.getTabsFromPromise = function () {
        var dfd = $q.defer();
        var data = {
            "tabs": [
                {
                    "name": "Home",
                    "templateUrl": "app/home/home.tpl.html"
      },
                {
                    "name": "Vehicles",
                    "templateUrl": "app/vehicles/vehicle.tpl.html"
      },
                {
                    "name": "Profile",
                    "templateUrl": "app/profile/profile.tpl.html"
      },
                {
                    "name": "Register",
                    "templateUrl": "app/register/register.tpl.html"
      },
                {
                    "name": "Login",
                    "templateUrl": "app/login/login.tpl.html"
      }
   ]
        };
        dfd.resolve(data);
        /*$http.get('app/data/tabs.json')
            .then(function (response) {
                if (response.status == 200) {
                    dfd.resolve(response.data);
                } else {
                    dfd.reject("Error Occurred");
                }

            })
            .catch(function (response) {
                dfd.reject(response);

            })
*/
        return dfd.promise;
    };


};
angular.module('vehicleDealers')
    .service('navbarService', ['$http', '$q', navbarSvc])
