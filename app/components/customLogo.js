function customLogo() {

    return {
        restrict: "A,E,C",
       
        //A Stands of attribute
 //E stands for Element
        //C stands for class
        
         scope:{
             brandName:"@"//read only from controller
         },
        template: '<a href="#" class="navbar-brand">{{brandName}}</a>'

    };
}

angular.module('vehicleDealers')
    .directive('customLogo', [customLogo])
