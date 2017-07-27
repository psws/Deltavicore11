
console.log("app routing - debug");
'use strict';

angular.module("deltavi").config(['$routeProvider', '$locationProvider', 'applicationConfigurationProvider',
    function ($routeProvider, $locationProvider, applicationConfigurationProvider) {

        function getApplicationVersion() {
            var applicationVersion = applicationConfigurationProvider.getVersion();
            return applicationVersion;
        }

        //needs jquery
        //var baseSiteUrlPath = $("base").first().attr("href");

        //jqlite from angular
        var baseSiteUrlPath = (angular.element(document.getElementsByName('base')))[0].href;
        var envDevelopment = true;
        var bLoad = true;
        if (applicationConfigurationProvider.getEnv() !== "Development") {
            envDevelopment = false;
        }

        $routeProvider.when('/:section/:tree',
            {
                templateUrl: function (rp) { return baseSiteUrlPath + '/app/' + rp.section + '/' + rp.tree + '.html?v=' + getApplicationVersion(); },
                //controller: function (rp) { return rp.tree + ".controller.js?v=" + getApplicationVersion(); },
                resolve: {

                    resolver: ['$q', '$rootScope', '$location', function ($q, $rootScope, $location) {
                        var controllerToLoad;
                        var path = $location.path().split("/");
                        var directory = path[1];
                        var controllerName = path[2];
                        if (!envDevelopment) {
                            if (applicationConfigurationProvider.IsLoaded(directory)) {
                                bLoad = false;
                            } else {
                                controllerToLoad = applicationConfigurationProvider.getBundle(directory);
                            }
                       } else {
                            controllerToLoad = "/app/" + directory + "/" + controllerName + ".controller.js?v=" + getApplicationVersion();
                        }


                        if (bLoad) {
                            controllerToLoad = controllerToLoad.toLowerCase();
                           var deferred = $q.defer();
                            require([controllerToLoad], function () {
                                $rootScope.$apply(function () {
                                    deferred.resolve();
                                });
                            });
                            if (!envDevelopment) {
                                applicationConfigurationProvider.SetLoaded(directory);
                            }
                            return deferred.promise;
                       }


                    }]
                }


            });

        $routeProvider.when('/:section/:tree/:id',
            {
                templateUrl: function (rp) { return baseSiteUrlPath + '/app/' + rp.section + '/' + rp.tree + '.html?v=' + getApplicationVersion(); },

                resolve: {

                    resolver: ['$q', '$rootScope', '$location', function ($q, $rootScope, $location) {
                        var controllerToLoad;
                        var path = $location.path().split("/");
                        var directory = path[1];
                        var controllerName = path[2];

                        if (!envDevelopment) {
                            if (applicationConfigurationProvider.IsLoaded(directory)) {
                                bLoad = false;
                            } else {
                                controllerToLoad = applicationConfigurationProvider.getBundle(directory);
                            }
                        } else {
                            controllerToLoad = "/app/" + directory + "/" + controllerName + ".controller.js?v=" + getApplicationVersion();
                        }

                        if (bLoad) {
                            controllerToLoad = controllerToLoad.toLowerCase();
                           var deferred = $q.defer();
                            require([controllerToLoad], function () {
                                $rootScope.$apply(function () {
                                    deferred.resolve();
                                });
                            });
                            if (!envDevelopment) {
                                applicationConfigurationProvider.SetLoaded(directory);
                            }

                            return deferred.promise;
                        }

                    }]
                }

            });

        $routeProvider.when('/',
            // if you add the controller: parm, the vm.initializeController() will run (digested) twice
            //https://stackoverflow.com/questions/15535336/combating-angularjs-executing-controller-twice
            //{ templateUrl: baseSiteUrlPath + 'app/home/index.html', controller: 'index.controller' }

            //   { templateUrl: baseSiteUrlPath + 'app/home/index.html' }

            //);


            {
                //https://benohead.com/angularjs-requirejs-dynamic-loading-and-pluggable-views/
                templateUrl: function (rp) { return baseSiteUrlPath + '/app/home/index.html?v=' + getApplicationVersion(); },

                resolve: {

                    resolver: ['$q', '$rootScope', '$location', function ($q, $rootScope, $location) {
                        var controllerToLoad;

                        if (!envDevelopment) {
                            if (applicationConfigurationProvider.IsLoaded('home')) {
                                bLoad = false;
                            } else {
                                controllerToLoad = applicationConfigurationProvider.getBundle('home');
                            }
                       } else {
                            controllerToLoad = "/app/home/index.controller.js?v=" + getApplicationVersion();
                        }
                        if (bLoad) {
                            var deferred = $q.defer();
                            require([controllerToLoad], function () {
                                $rootScope.$apply(function () {
                                    deferred.resolve();
                                });
                            });
                            if (!envDevelopment) {
                                applicationConfigurationProvider.SetLoaded('home');
                            }
                            return deferred.promise;
                        } 

                    }]
                }


            });

        $locationProvider.html5Mode(true);

    }]);

console.log("app routing - done");


