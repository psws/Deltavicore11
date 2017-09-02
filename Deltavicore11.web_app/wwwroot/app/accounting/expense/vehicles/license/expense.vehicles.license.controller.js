(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('expenseVehiclesLicenseController', expenseVehiclesLicenseController);

    expenseVehiclesLicenseController.$inject = ['$location'];

    function expenseVehiclesLicenseController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Vehicle License Expense Entry';

        activate();

        function activate() { }
    }
})();
