console.log("Deltavi Module Bootstrap");

//(function () {
//    'use strict';
(function () {
    'use strict';

    var app = angular.module('deltavi', [
        'ngRoute',
        'ui.bootstrap',
        'ui.tab.scroll',
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
    //app.config(['scrollableTabsetConfigProvider', function (scrollableTabsetConfigProvider) {
    //    scrollableTabsetConfigProvider.setShowTooltips(true);

    //    scrollableTabsetConfigProvider.setTooltipLeft('bottom');

    //    scrollableTabsetConfigProvider.setTooltipRight('left');

    //}]);
   



})();

console.log("Deltavi Module Bootstrap done");

