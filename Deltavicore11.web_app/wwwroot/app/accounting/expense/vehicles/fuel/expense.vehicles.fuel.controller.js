(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('expenseVehiclesFuelController', expenseVehiclesFuelController);

    expenseVehiclesFuelController.$inject = ['$location'];

    function expenseVehiclesFuelController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Vehicle Fuel Expense Entry';

        activate();

        function activate() { }
    }
})();
