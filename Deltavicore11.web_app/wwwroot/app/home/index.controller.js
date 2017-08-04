(function () {
    'use strict';

    var NameComponent = {
        bindings: {
            name: '=',
            age: '='
        },
        template: [
            '<div>',
            '<p>Name: {{$ctrl.name}}</p>',
            '<p>Age: {{$ctrl.age}}</p>',
            '</div>'
        ].join('')
    };
    // controller
    //var PersonController = function () {

    //    var vm = this;
    //    vm.firstName = "Aftab";
    //    vm.lastName = "Ansari";

    //    vm.todo = function () {
    //        vm.firstName = "djt";
    //    }

    //}

    //angular
    //    .module("deltavi")
    //    .component('personComponent', {
    //        templateUrl: 'personcomponent.html',
    //        controller: PersonController,
    //        controllerAs: 'vm'

    //    })
    //angular
    //    .module("deltavi")
    //    .register
    //    .controller('PersonController', PersonController);


    angular
        .module("deltavi")
        .register
        .controller('indexController', indexController)
       ;

    indexController.$inject = [
        '$routeParams',
        '$location'
    ];

    //angular
    //    .module("deltavi")
    //    .controller('NoopController', angular.noop)
    //    .component('nameComponent', NameComponent);

    function indexController($routeParams, $location) {
        //console.log("indexController init");

        var vm = this;
        vm.form = {
            username: 'admin',
            password: null
        };
        vm.tabs = [];
        vm.scrlTabsApi = {};

        vm.tab1 = {
            heading: 'Provider Maintenance',
            templateUrl: '/app/home/personcomponent.html'
        };

        vm.tab2 = {
            heading: 'Provider Maintenance2',
            templateUrl: '/app/poultryfeed/personcomponent.html'
        };

        vm.people = [{
            name: 'Todd',
            age: 25
        }, {
            name: 'Ryan',
            age: 20
        }, {
            name: 'Jilles',
            age: 21
        }];


        vm.initializeController = function () {
            vm.title = "Index Page";

            for (var i = 0; i < 15; i++) {
                vm.tabs.push({
                    heading: 'Tab ' + i,
                    content: 'This is the content for tab ' + i
                });
            }

            //vm.todo()
        };

        vm.ProviderMaintenance = function () {
            $location.path("PoultryFeed/Provider.Maintenance");
        };

        //  http://plnkr.co/edit/YJNDaQ?p=preview
        //  https://github.com/VersifitTechnologies/angular-ui-tab-scroll
        vm.reCalcScroll = function () {
            if (vm.scrlTabsApi.doRecalculate) {
                vm.scrlTabsApi.doRecalculate();
            }
        };

        vm.scrollIntoView = function (arg) {
            if (vm.scrlTabsApi.scrollTabIntoView) {
                vm.scrlTabsApi.scrollTabIntoView(arg);
            }
        };

        vm.addTab = function () {
            vm.tabs.push({
                heading: 'New Tab ' + vm.tabs.length,
                content: 'This is the content for a NEW tab ' + vm.tabs.length
            });
        };

        vm.removeTab = function () {
            vm.tabs.splice(vm.tabs.length - 1, 1);
        };


        angular.module('deltavi')
            //.controller('CountCtrl', CountCtrl)
            .component('counter', {
                bindings: {
                    count: '='
                },
                controller: function () {
                    var vm = this;
                    function increment() {
                        vm.count++;
                    }
                    function decrement() {
                        vm.count--;
                    }
                    vm.increment = increment;
                    vm.decrement = decrement;
                },
                template: [
                    '<div class="todo">',
                    '<input type="text" ng-model="$ctrl.count">',
                    '<button type="button" ng-click="$ctrl.decrement();">-</button>',
                    '<button type="button" ng-click="$ctrl.increment();">+</button>',
                    '</div>'
                ].join('')
            });

        angular.module('deltavi').directive('tabController', function () {
            return {
                restrict: 'A',
                controller: '@',
                name: 'tabController',
                scope: {},

            }
        })
            .controller('MyCustomController', function () {
                var vm = this;
                vm.title = "Hey, I am The first controller";
            })
            .controller('MyCustomController2', function () {
                var vm = this;
                vm.title = "Hey, I am the second controller";
            });     

        activate();

        function activate() { }
    }

})();

console.log("indexController");



