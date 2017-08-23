(function () {
    console.log("app uirouting - debug");
    'use strict';
    angular.module("deltavi").config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'applicationConfigurationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider, applicationConfigurationProvider) {

            function getApplicationVersion() {
                var applicationVersion = applicationConfigurationProvider.getVersion();
                return applicationVersion;
            }

            function bundleControllerLoadCheck(envDevelopment, directory, controllerToLoad) {
                //This method is here because we cannot inject 'applicationConfigurationProvider' into the 'CtrlResolver' service.
                //we need to split th controller lazy load between this config and the 'CtrlResolver'
                //this method handles the non development bundlin selection and isLosaded load once functionality
                //We have a CtrlResolver.LoadController() service method to use the $q defered promise pattern.
                //We casnnot inject the $q in this config block,because it is not created yet in the configuration phase.
                // for non development env, this function returns a bundle 'controllerToLoad'
                //if bundle is already been loaded it returns empty string.

                if (!envDevelopment) {
                    if (!applicationConfigurationProvider.IsLoaded(directory)) {
                        controllerToLoad = applicationConfigurationProvider.getBundle(directory);
                        applicationConfigurationProvider.SetLoaded(directory);
                    } else {
                        controllerToLoad = ''; //bundle loaded already
                    }
                }
                return controllerToLoad;

            }

            //needs jquery
            //var baseSiteUrlPath = $("base").first().attr("href");

            //jqlite from angular
            var baseSiteUrlPath = (angular.element(document.getElementsByName('base')))[0].href;
            var envDevelopment = true;

            if (applicationConfigurationProvider.getEnv() !== "Development") {
                envDevelopment = false;
            }

            $urlRouterProvider.otherwise('/home');

            $urlRouterProvider.when("/", ['$state', '$match', function ($state, $match) {
                $state.go('expense'); 

            }]);

            // States
            $stateProvider
                .state('expense', {
                    url: '/expense',
                    templateUrl: '/app/accounting/expense/expense.html',
                    controller: 'expenseController as vm',  //these lines cause the controller to be constructed/initialized twice
                    //component: 'index',
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'expense', '/app/accounting/expense/expense.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('expense.cashadvance', {
                    url: '/cashadvance',
                    templateUrl: '/app/accounting/expense/cashadvance/expense.cashadvance.html',
                    controller: 'expenseCashAdnavceController as vm',
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'expense.cashadvance', '/app/accounting/expense/cashadvance/expense.cashadvance.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('expense.farmfuel', {
                    url: '/farmfuel',
                    templateUrl: '/app/accounting/expense/farmfuel/expense.farmfuel.html',
                    controller: 'expenseFarmFuelController as vm',
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'expense.farmfuel', '/app/accounting/expense/farmfuel/expense.farmfuel.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('expense.feed', {
                    url: '/feed',
                    templateUrl: '/app/accounting/expense/feed/expense.feed.html',
                    controller: 'expenseFeedController as vm',
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'expense.feed', '/app/accounting/expense/feed/expense.feed.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('expense.supplies', {
                    url: '/supplies',
                    templateUrl: '/app/accounting/expense/supplies/expense.supplies.html',
                    controller: 'expenseSuppliesController as vm',
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'expense.supplies', '/app/accounting/expense/supplies/expense.supplies.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('expense.utilities', {
                    url: '/utilities',
                    templateUrl: '/app/accounting/expense/utilities/expense.utilities.html',
                    controller: 'expenseUtilitiesController as vm',
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'expense.utilities', '/app/accounting/expense/utilities/expense.utilities.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })

                .state('sales', {
                    url: '/sales',
                    templateUrl: '/app/accounting/sales/sales.html',
                    controller: 'salesController as vm',  //these lines cause the controller to be constructed/initialized twice
                    //component: 'sales',
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'sales', '/app/accounting/sales/sales.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('salary', {
                    url: '/salary',
                    templateUrl: '/app/accounting/salary/salary.html',
                    controller: 'salaryController as vm',  //these lines cause the controller to be constructed/initialized twice
                    //component: 'salary',
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'salary', '/app/accounting/salary/salary.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('admin', {
                    url: '/admin',
                    templateUrl: '/app/accounting/admin/admin.html',
                    controller: 'adminController as vm',  
                    //component: 'admin',
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'admin', '/app/accounting/admin/admin.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('admin.provider', {
                    url: '/provider',
                    templateUrl: '/app/accounting/admin/provider/admin.provider.html',
                    controller: 'adminProviderController as vm',  
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'admin.provider', '/app/accounting/admin/provider/admin.provider.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('admin.farm', {
                    url: '/farm',
                    templateUrl: '/app/accounting/admin/farm/admin.farm.html',
                    controller: 'adminFarmController as vm',
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'admin.farm', '/app/accounting/admin/farm/admin.farm.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
               .state('admin.feed', {
                    url: '/feed',
                    templateUrl: '/app/accounting/admin/feed/admin.feed.html',
                    controller: 'adminFeedController as vm',
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'admin.feed', '/app/accounting/admin/feed/admin.feed.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('admin.vehicle', {
                    url: '/vehicle',
                    templateUrl: '/app/accounting/admin/vehicle/admin.vehicle.html',
                    controller: 'adminVehicleController as vm',
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'admin.vehicle', '/app/accounting/admin/vehicle/admin.vehicle.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
              .state('/home/contact', {
                    url: '/home/contact',
                    templateUrl: '/app/home/contact.html',
                    controller: 'contactController as vm',  
                    //component: 'contact',
                    resolve: {
                        resolver: ['$q', '$rootScope', '$location', 'CtrlResolver', function ($q, $rootScope, $location, CtrlResolver) {
                            var controllerToLoad;
                            var directory = 'home';
                            var bLoad = true;

                            if (!envDevelopment) {
                                if (!applicationConfigurationProvider.IsLoaded(directory)) {
                                    controllerToLoad = applicationConfigurationProvider.getBundle(directory);
                                    applicationConfigurationProvider.SetLoaded(directory);
                                } else {
                                    bLoad = false;
                                }
                            } else {
                                controllerToLoad = "/app/home/contact.controller.js?v=" + getApplicationVersion();
                                //controllerToLoad = "/app/components/contact.js?v=" + getApplicationVersion();
                                //bLoad = false;

                            }
                            if (bLoad) {
                                return CtrlResolver.loadController( controllerToLoad);
                            }


                        }]
                    }
                })
                .state('/home/about', {
                    url: '/home/about',
                    templateUrl: '/app/home/about.html',
                    controller: 'aboutController as vm',
                    //component: 'about',
                    resolve: {
                        resolver: ['$q', '$rootScope', '$location', 'CtrlResolver', function ($q, $rootScope, $location, CtrlResolver) {
                            var controllerToLoad;
                            var directory = 'home';
                            var bLoad = true;

                            if (!envDevelopment) {
                                if (!applicationConfigurationProvider.IsLoaded(directory)) {
                                    controllerToLoad = applicationConfigurationProvider.getBundle(directory);
                                    applicationConfigurationProvider.SetLoaded(directory);
                                } else {
                                    bLoad = false;
                                }
                            } else {
                                controllerToLoad = "/app/home/about.controller.js?v=" + getApplicationVersion();
                                //bLoad = false;

                            }
                            if (bLoad) {
                                return CtrlResolver.loadController( controllerToLoad);
                            }


                        }]
                    }
                })


                ;



            $locationProvider.html5Mode(true);




        }]);

})();


console.log("app uirouting - done");


