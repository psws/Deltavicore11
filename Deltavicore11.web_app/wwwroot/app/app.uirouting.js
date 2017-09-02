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
                $state.go('production'); //default tab

            }]);

            // States
            //https://www.funnyant.com/angularjs-ui-router/
            $stateProvider
                .state('production', {
                    url: '/production',
                    views: {
                        'content@': {
                            templateUrl: '/app/production/production.html',
                            controller: 'productionController as vm',  //these lines cause the controller to be constructed/initialized twice
                        }
                    },
                    //component: 'index',
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'production', '/app/production/production.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('production.l1', {
                    url: '/l1',
                    views: {
                        'l1': {
                            templateUrl: '/app/production/l1/production.l1.html',
                            controller: 'productionL1Controller as vm',
                        }
                    },
                    //component: 'index',
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'production.l1', '/app/production/l1/production.l1.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('production.l2', {
                    url: '/l2',
                    views: {
                        'l2': {
                            templateUrl: '/app/production/l2/production.l2.html',
                            controller: 'productionL2Controller as vm',
                        }
                    },
                    //component: 'index',
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'production.l2', '/app/production/l2/production.l2.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('production.l3', {
                    url: '/l3',
                    views: {
                        'l3': {
                            templateUrl: '/app/production/l3/production.l3.html',
                            controller: 'productionL3Controller as vm',  //these lines cause the controller to be constructed/initialized twice
                        }
                    },
                    //component: 'index',
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'production.l3', '/app/production/l3/production.l3.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('production.health', {
                    url: '/health',
                    views: {
                        'health': {
                            templateUrl: '/app/production/health/production.health.html',
                            controller: 'productionHealthController as vm',  //these lines cause the controller to be constructed/initialized twice
                        }
                    },
                    //component: 'index',
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'production.health', '/app/production/health/production.health.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })


                .state('expense', {
                    url: '/expense',
                    views: {
                        'content@': {
                            templateUrl: '/app/accounting/expense/expense.html',
                            controller: 'expenseController as vm',  //these lines cause the controller to be constructed/initialized twice
                        }
                    },
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
                    views: {
                        'cash advance': {
                            templateUrl: '/app/accounting/expense/cashadvance/expense.cashadvance.html',
                            controller: 'expenseCashAdnavceController as vm',
                        }
                    },
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'expense.cashadvance', '/app/accounting/expense/cashadvance/expense.cashadvance.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('expense.farmfuel', {
                    url: '/farmfuel',
                    views: {
                        'farm fuel': {
                            templateUrl: '/app/accounting/expense/farmfuel/expense.farmfuel.html',
                            controller: 'expenseFarmFuelController as vm',
                        }
                    },
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'expense.farmfuel', '/app/accounting/expense/farmfuel/expense.farmfuel.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('expense.feed', {
                    url: '/feed',
                    views: {
                        'feed': {
                            templateUrl: '/app/accounting/expense/feed/expense.feed.html',
                            controller: 'expenseFeedController as vm',
                        }
                    },
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'expense.feed', '/app/accounting/expense/feed/expense.feed.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('expense.supplies', {
                    url: '/supplies',
                    views: {
                        'supplies': {
                            templateUrl: '/app/accounting/expense/supplies/expense.supplies.html',
                            controller: 'expenseSuppliesController as vm',
                        }
                    },
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'expense.supplies', '/app/accounting/expense/supplies/expense.supplies.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('expense.utilities', {
                    url: '/utilities',
                    views: {
                        'utilities': {
                            templateUrl: '/app/accounting/expense/utilities/expense.utilities.html',
                            controller: 'expenseUtilitiesController as vm',
                        }
                    },
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'expense.utilities', '/app/accounting/expense/utilities/expense.utilities.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('expense.vehicles', {
                    url: '/vehicles',
                    views: {
                        'vehicles': {
                            templateUrl: '/app/accounting/expense/vehicles/expense.vehicles.html',
                            controller: 'expenseVehiclesController as vm',
                        }
                    },
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'expense.vehicles', '/app/accounting/expense/vehicles/expense.vehicles.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('expense.vehicles.fuel', {
                    url: '/fuel',
                    views: {
                        'fuel': {
                            templateUrl: '/app/accounting/expense/vehicles/fuel/expense.vehicles.fuel.html',
                            controller: 'expenseVehiclesFuelController as vm',
                        }
                    },
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'expense.vehicles.fuel', '/app/accounting/expense/vehicles/fuel/expense.vehicles.fuel.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('expense.vehicles.repair', {
                    url: '/repair',
                    views: {
                        'repair': {
                            templateUrl: '/app/accounting/expense/vehicles/repair/expense.vehicles.repair.html',
                            controller: 'expenseVehiclesRepairController as vm',
                        }
                    },
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'expense.vehicles.repair', '/app/accounting/expense/vehicles/repair/expense.vehicles.repair.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('expense.vehicles.license', {
                    url: '/license',
                    views: {
                        'license': {
                            templateUrl: '/app/accounting/expense/vehicles/license/expense.vehicles.license.html',
                            controller: 'expenseVehiclesLicenseController as vm',
                        }
                    },
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'expense.vehicles.license', '/app/accounting/expense/vehicles/license/expense.vehicles.license.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })


                .state('sales', {
                    url: '/sales',
                    views: {
                        'content@': {
                            templateUrl: '/app/accounting/sales/sales.html',
                            controller: 'salesController as vm',  //these lines cause the controller to be constructed/initialized twice
                        }
                    },
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
                    views: {
                        'content@': {
                            templateUrl: '/app/accounting/salary/salary.html',
                            controller: 'salaryController as vm',  //these lines cause the controller to be constructed/initialized twice
                        }
                    },
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
                    views: {
                        'content@': {
                            templateUrl: '/app/accounting/admin/admin.html',
                            controller: 'adminController as vm',
                        }
                    },
                    //component: 'admin',
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'admin', '/app/accounting/admin/admin.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('admin.providers', {
                    url: '/providers',
                    views: {
                        'providers': {
                            templateUrl: '/app/accounting/admin/providers/admin.providers.html',
                            controller: 'adminProvidersController as vm',
                        }
                    },
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'admin.providers', '/app/accounting/admin/providers/admin.providers.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('admin.farms', {
                    url: '/farms',
                    views: {
                        'farms': {
                            templateUrl: '/app/accounting/admin/farms/admin.farms.html',
                            controller: 'adminFarmsController as vm',
                        }
                    },
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'admin.farms', '/app/accounting/admin/farms/admin.farms.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('admin.feed', {
                    url: '/feed',
                    views: {
                        'feed': {
                            templateUrl: '/app/accounting/admin/feed/admin.feed.html',
                            controller: 'adminFeedController as vm',
                        }
                    },
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'admin.feed', '/app/accounting/admin/feed/admin.feed.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('admin.vehicles', {
                    url: '/vehicles',
                    views: {
                        'vehicles': {
                            templateUrl: '/app/accounting/admin/vehicles/admin.vehicles.html',
                            controller: 'adminVehiclesController as vm',
                        }
                    },
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'admin.vehicles', '/app/accounting/admin/vehicles/admin.vehicles.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('/home/contact', {
                    url: '/home/contact',
                    views: {
                        'content@': {
                            templateUrl: '/app/home/contact.html',
                            controller: 'contactController as vm',
                        }
                    },
                    //component: 'contact',
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'home', '/app/home/contact.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]
                    }
                })
                .state('/home/about', {
                    url: '/home/about',
                    views: {
                        'content@': {
                            templateUrl: '/app/home/about.html',
                            controller: 'aboutController as vm',
                        }
                    },

                    //component: 'about',
                    resolve: {
                        resolver: ['CtrlResolver', function (CtrlResolver) {
                            var controllerToLoad = bundleControllerLoadCheck(envDevelopment, 'home', '/app/home/about.controller.js?v=' + getApplicationVersion());
                            return CtrlResolver.loadController(controllerToLoad);
                        }]

                    }
                })

                ;



            $locationProvider.html5Mode(true);




        }]);

})();


console.log("app uirouting - done");


