(function () {
    console.log("app uirouting - debug");
    'use strict';

    angular.module("deltavi")
        .service('CtrlResolver', ['$q', '$rootScope', function ($q, $rootScope) {
            var service = {};


            service.loadController = function (directory, controllerToLoad) {


                controllerToLoad = controllerToLoad.toLowerCase();
                var deferred = $q.defer();
                require([controllerToLoad], function () {
                    $rootScope.$apply(function () {
                        deferred.resolve();
                    });
                });
                return deferred.promise;
            }

            return service;
        }]);


    angular.module("deltavi").config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'applicationConfigurationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider, applicationConfigurationProvider) {

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

            $urlRouterProvider.otherwise('/home');

            $urlRouterProvider.when("/", ['$state', '$match', function ($state, $match) {
                $state.go('home');
            }]);

            // States
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '/app/home/index.html',
                    controller: 'indexController as vm',  //these lines cause the controller to be constructed/initialized twice
                    resolve: {
                        resolver: ['$q', '$rootScope', '$location', 'CtrlResolver', function ($q, $rootScope, $location, CtrlResolver) {
                            var controllerToLoad;
                            var directory = 'home';
                            if (!envDevelopment) {
                                if (!applicationConfigurationProvider.IsLoaded(directory)) {
                                    controllerToLoad = applicationConfigurationProvider.getBundle(directory);
                                    applicationConfigurationProvider.SetLoaded(directory);
                                } else {
                                    bLoad = false;
                                }
                            } else {
                                controllerToLoad = "/app/home/index.controller.js?v=" + getApplicationVersion();
                            }
                            if (bLoad) {
                                return CtrlResolver.loadController('home', controllerToLoad);
                            }

                        }]
                    }
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: '/app/home/contact.html',
                    controller: 'contactController as vm',  
                    resolve: {
                        resolver: ['$q', '$rootScope', '$location', 'CtrlResolver', function ($q, $rootScope, $location, CtrlResolver) {
                            var controllerToLoad;
                            var directory = 'home';
                            if (!envDevelopment) {
                                if (!applicationConfigurationProvider.IsLoaded(directory)) {
                                    controllerToLoad = applicationConfigurationProvider.getBundle(directory);
                                    applicationConfigurationProvider.SetLoaded(directory);
                                } else {
                                    bLoad = false;
                                }
                            } else {
                                controllerToLoad = "/app/home/contact.controller.js?v=" + getApplicationVersion();
                            }
                            if (bLoad) {
                                return CtrlResolver.loadController('home', controllerToLoad);
                            }


                        }]
                    }
                })
                .state('about', {
                    url: '/about',
                    templateUrl: '/app/home/about.html',
                    controller: 'aboutController as vm',
                    resolve: {
                        resolver: ['$q', '$rootScope', '$location', 'CtrlResolver', function ($q, $rootScope, $location, CtrlResolver) {
                            var controllerToLoad;
                            var directory = 'home';
                            if (!envDevelopment) {
                                if (!applicationConfigurationProvider.IsLoaded(directory)) {
                                    controllerToLoad = applicationConfigurationProvider.getBundle(directory);
                                    applicationConfigurationProvider.SetLoaded(directory);
                                } else {
                                    bLoad = false;
                                }
                            } else {
                                controllerToLoad = "/app/home/about.controller.js?v=" + getApplicationVersion();
                            }
                            if (bLoad) {
                                return CtrlResolver.loadController('home', controllerToLoad);
                            }


                        }]
                    }
                })


                ;



            $locationProvider.html5Mode(true);




        }]);

})();


    console.log("app uirouting - done");


