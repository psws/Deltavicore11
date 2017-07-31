(function () {
    'use strict';

    angular
        .module("deltavi")
        .register
        .controller('indexController', indexController);

    indexController.$inject = [
        '$routeParams',
        '$location'
    ];



    function indexController($routeParams, $location) {
        //console.log("indexController init");

        var vm = this;
        vm.form = {
            username: 'admin',
            password: null
        };
        vm.tabs = [];
        vm.scrlTabsApi = {};


        vm.initializeController = function () {
            vm.title = "Index Page";

            for (var i = 0; i < 15; i++) {
                vm.tabs.push({
                    heading: 'Tab ' + i,
                    content: 'This is the content for tab ' + i
                });
            }
        }

        vm.ProviderMaintenance = function () {
            $location.path("PoultryFeed/Provider.Maintenance");
        }

        //  http://plnkr.co/edit/YJNDaQ?p=preview
        //  https://github.com/VersifitTechnologies/angular-ui-tab-scroll
        vm.reCalcScroll = function () {
            if (vm.scrlTabsApi.doRecalculate) {
                vm.scrlTabsApi.doRecalculate();
            }
        };

        vm.scrollIntoView = function (arg) {
            if (vm.scrlTabsApi.scrollTabIntoView) {
                vm.scrlTabsApi.scrollTabIntoView(arg)
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

        

        activate();

        function activate() { }
    }

})();

console.log("indexController");



