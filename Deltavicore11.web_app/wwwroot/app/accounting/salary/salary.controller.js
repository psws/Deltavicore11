(function () {
    'use strict';

    angular
        .module("deltavi")
        .register
        .controller('salaryController', salaryController)
        ;

    salaryController.$inject = [
        '$location'
    ];



    function salaryController( $location) {
        //console.log("indexController init");

        var vm = this;
        vm.title = "Deltavi Salary";


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

        for (var i = 0; i < 15; i++) {
            vm.tabs.push({
                heading: 'Tab ' + i,
                content: 'This is the content for tab ' + i
            });
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


    }

})();




