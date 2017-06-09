console.log("Deltavi Module Bootstrap");

//(function () {
//    'use strict';
(function () {
    'use strict';

    var app = angular.module('deltavi', [
        'ngRoute',
        'ui.bootstrap',
        'ngSanitize',
        'blockUI' // see note appmodule.txt
    ]);

    //app.config(['$controllerProvider', '$provide', function ($controllerProvider, $provide) {
    //    app.register =
    //      {
    //          controller: $controllerProvider.register,
    //          service: $provide.service
    //      };
    //}]);

})();

console.log("Deltavi Module Bootstrap done");

