(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('expenseVehiclesRepairController', expenseVehiclesRepairController);

    expenseVehiclesRepairController.$inject = ['$location'];

    function expenseVehiclesRepairController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Vehicle Repair Expense Entry';

        activate();

        function activate() { }
    }
})();
