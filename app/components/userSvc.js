function userSvc($http, $q) {
    this.checkUser = function (userName) {
        var dfd = $q.defer();
        var result = "User doesnot Exist";
        $http.get('app/data/profiles.json')
            .then(function (response) {
                if (response.data) {
                    angular.forEach(response.data.profiles, function (item) {
                        if (item.username == userName) {
                            result = "User Exists";
                        }
                    });
                    dfd.resolve(result);

                }

            })
            .catch(function (response) {

            });
        return dfd.promise;
    }
}

angular.module('vehicleDealers')
    .service('userSvc', ['$http', '$q', userSvc])
