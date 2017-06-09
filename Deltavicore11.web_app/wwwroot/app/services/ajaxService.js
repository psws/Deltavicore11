//(function () {
//    'use strict';

//    angular
//        .module('deltavi')
//        .service('AjaxService', AjaxService);

//    AjaxService.$inject = ['$http'];

//    function AjaxService($http) {
//        this.getData = getData;

//        function getData() { }
//    }
//})();
console.log("ajax service");

angular.module('deltavi').service('ajaxService', ['$http', 'blockUI', function ($http, blockUI) {

    "use strict";

    this.ajaxPost = function (data, route, successFunction, errorFunction) {

        blockUI.start();

        $http.post(route, data).success(function (response, status, headers, config) {
            blockUI.stop();
            successFunction(response, status);
        }).error(function (response) {
            blockUI.stop();
            errorFunction(response);
        });

    }

}]);