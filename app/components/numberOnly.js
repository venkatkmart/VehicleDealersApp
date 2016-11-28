function numberOnly() {

    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind('keypress', function (evt) {
                    if (evt.keyCode >= 48 && evt.keyCode <= 57) {
                        if ($(this).val().length > attrs['maxlength']) {
                            evt.preventDefault();
                        }

                    } else {
                        evt.preventDefault();
                    }
                })
                /*    console.log(element);
                    console.log(attrs);
                    console.log(scope);*/
        }
    };
}

angular.module('vehicleDealers')
    .directive('numberOnly', [numberOnly])
