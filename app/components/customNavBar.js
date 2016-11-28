function customNavBar() {

    return {
        restrict: "A",
        templateUrl: 'app/navbar/navbar.tpl.html',
        scope: {
            navItems: "="
        }
    };
}

angular.module('vehicleDealers')
    .directive('customNavBar', [customNavBar])
