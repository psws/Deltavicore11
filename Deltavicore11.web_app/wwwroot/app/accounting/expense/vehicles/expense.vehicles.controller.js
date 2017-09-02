(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('expenseVehiclesController', expenseVehiclesController);

    expenseVehiclesController.$inject = [
        '$location',
        '$state',
        'tabService'
    ];

    function expenseVehiclesController($location, $state, tabService) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Vehicle Expense Entry';
        vm.Selectedtab = "1"; //sets initial tab

        vm.tabs = [];
        vm.tabs = tabService.GetAllTabs('/app/accounting/expense/vehicles/expense.vehicles.tabs.json').then(function (data) {
            vm.tabs = data;
        });


        vm.scrlTabsApi = {};

        vm.tabSelected = function (route) {
            $state.go(route);
        };

        activate();

        function activate() { }
    }
})();
