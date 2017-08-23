(function () {
    'use strict';

    angular
        .module("deltavi")
        .register
        .controller('expenseController', expenseController)
        ;

    expenseController.$inject = [
        '$location',
        '$state',
        'tabService'
    ];



    function expenseController($location, $state, tabService) {
        //console.log("indexController init");

        var vm = this;
        vm.title = "Deltavi Expenses";


        vm.tabs = [];
        vm.tabs = tabService.GetAllTabs('/app/accounting/expense/expense.tabs.json').then(function (data) {
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

console.log("ExpenseController");



