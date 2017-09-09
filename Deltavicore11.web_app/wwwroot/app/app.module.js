console.log("Deltavi Module Bootstrap");

(function () {
    'use strict';

            //'ngRoute',
    // 'ui.router'

    var app = angular.module('deltavi', [
        'ui.router',
        'ui.bootstrap',
        //'ngAnimate',
       //'ngTouch',
      'ui.grid',
        'ui.grid.selection',
        'ui.grid.exporter',
       'ui.tab.scroll',
        //'ngSanitize',
        'blockUI' // see note appmodule.txt
    ]);

    //app.config(['$controllerProvider', '$provide', function ($controllerProvider, $provide) {
    //    app.register =
    //      {
    //          controller: $controllerProvider.register,
    //          service: $provide.service
    //      };
    //}]);
    app.config(['scrollableTabsetConfigProvider', function (scrollableTabsetConfigProvider) {
        scrollableTabsetConfigProvider.setShowTooltips(true);

        scrollableTabsetConfigProvider.setTooltipRightPlacement('left');

        scrollableTabsetConfigProvider.setTooltipLeftPlacement('right');

    }]);
   



})();

console.log("Deltavi Module Bootstrap done");

