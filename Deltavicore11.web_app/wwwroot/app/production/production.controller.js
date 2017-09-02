(function () {
    'use strict';

    angular
        .module("deltavi")
        .register
        .controller('productionController', productionController)
        ;

    productionController.$inject = [
        '$location',
        '$state',
        'tabService'
    ];



    function productionController($location, $state, tabService) {
        //console.log("indexController init");

        var vm = this;
        vm.title = "Deltavi Production";
        vm.Selectedtab = "1"; //sets initial tab


        vm.tabs = [];
        vm.tabs = tabService.GetAllTabs('/app/production/production.tabs.json').then(function (data) {
            vm.tabs = data;
        });


        vm.scrlTabsApi = {};

        vm.tabSelected = function (route) {
            $state.go(route);
        };



        ////  http://plnkr.co/edit/YJNDaQ?p=preview
        ////  https://github.com/VersifitTechnologies/angular-ui-tab-scroll
        //vm.reCalcScroll = function () {
        //    if (vm.scrlTabsApi.doRecalculate) {
        //        vm.scrlTabsApi.doRecalculate();
        //    }
        //};

        //vm.scrollIntoView = function (arg) {
        //    if (vm.scrlTabsApi.scrollTabIntoView) {
        //        vm.scrlTabsApi.scrollTabIntoView(arg);
        //    }
        //};

        //vm.addTab = function () {
        //    vm.tabs.push({
        //        heading: 'New Tab ' + vm.tabs.length,
        //        content: 'This is the content for a NEW tab ' + vm.tabs.length
        //    });
        //};

        //vm.removeTab = function () {
        //    vm.tabs.splice(vm.tabs.length - 1, 1);
        //};


    }

})();

console.log("productionController");



