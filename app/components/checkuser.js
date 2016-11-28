function checkuser(userSvc) {

    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            //ctrl.$parsers.unshift(checkUserExist);

            element.bind('blur', checkUserExist)

            function checkUserExist() {
                var viewVal = $(this).val()
                userSvc.checkUser(viewVal)
                    .then(function (response) {
                        console.log(response);
                        if (response == "User doesnot Exist") {
                            ctrl.$setValidity('checkuser', true);
                        } else {
                            ctrl.$setValidity('checkuser', false);
                        }
                    }).catch(function (response) {
                        console.log(response);
                    });
                return viewVal;
            }

        }


    };
}

angular.module('vehicleDealers')
    .directive('checkuser', ['userSvc', checkuser])
