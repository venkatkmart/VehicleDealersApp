function customClick() {

    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind('click', function () {
                scope.$eval(attrs['customClick']);
            });
        }
    };
}

angular.module('vehicleDealers')
    .directive('customClick', [customClick])
