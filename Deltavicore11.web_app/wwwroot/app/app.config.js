console.log("Deltavi Config Bootstrap");

(function () {
    'use strict';

    var app = angular.module('deltavi');
    app.config([
            '$controllerProvider',
            '$provide',
            function ($controllerProvider, $provide) {
                app.register =
                    {
                        controller: $controllerProvider.register,
                        service: $provide.service
                    };
            }]);
})();


console.log("Deltavi Config Bootstrap done");
