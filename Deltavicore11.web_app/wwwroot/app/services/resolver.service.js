(function () {
    'use strict';

    // a better full module registratob is
    //https://benohead.com/angularjs-requirejs-dynamic-loading-and-pluggable-views/
    angular.module("deltavi")
        .service('CtrlResolver', ['$q', '$rootScope',  function ($q, $rootScope) {
            var service = {};


            service.loadController = function (controllerToLoad) {

                if (controllerToLoad.length !== 0) {

                    controllerToLoad = controllerToLoad.toLowerCase();
                    var deferred = $q.defer();
                    require([controllerToLoad], function () {
                        $rootScope.$apply(function () {
                            deferred.resolve();
                        });
                    });
                    return deferred.promise;
                }
            }

            service.resolver = function (envDevelopment, directory, controllerToLoad ) {
                    var bLoad = true;
                    if (!envDevelopment) {
                        if (!applicationConfigurationProvider.IsLoaded(directory)) {
                            controllerToLoad = applicationConfigurationProvider.getBundle(directory);
                            applicationConfigurationProvider.SetLoaded(directory);
                        } else {
                            bLoad = false;
                        }
                    } else {
                        var tmp = applicationConfigurationProvider.IsLoaded(directory);
                        //controllerToLoad = "/app/accounting/admin/provider/admin.provider.controller.js?v=" + getApplicationVersion();
                    }
                    if (bLoad) {
                        //return service.loadController(controllerToLoad);
                        controllerToLoad = controllerToLoad.toLowerCase();
                        var deferred = $q.defer();
                        require([controllerToLoad], function () {
                            $rootScope.$apply(function () {
                                deferred.resolve();
                            });
                        });
                        return deferred.promise;

                    }

                }

            return service;
        }]);




})();
