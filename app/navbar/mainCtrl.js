//
var mainCtrlFn = function ($scope, navbarService) {
    $scope.title = 'CGI';
    /* $scope.loadContent=function(contentTye){
       if(contentTye=='login')
         {
          $scope.contentTemplate='app/login/login.tpl.html';
             
         }
         if(contentTye=='register'){
             
            $scope.contentTemplate='app/register/register.tpl.html'; 
         }
     };*/

    $scope.loadContent = function (tab) {
        $scope.contentTemplate = tab.templateUrl;
    };

    navbarService.getTabsFromPromise()
        .then(function (response) {
            console.log(response);
            $scope.tabs = response.tabs;

        }).catch(function (response) {
            console.log(response);
        })

    /* navbarService.getTabs()
      .success(function (response) {
          console.log(response);
          $scope.tabs = response.tabs;

      }).error(function (errorResponse) {
          console.log(response);

      })*/
};
angular.module('vehicleDealers')
    .controller('mainCtrl', ['$scope', 'navbarService', mainCtrlFn])
