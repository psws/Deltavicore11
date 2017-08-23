(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('adminVehicleController', adminVehicleController);

    adminVehicleController.$inject = ['$location'];

    function adminVehicleController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Vehicle Administration';

        activate();

        function activate() { }
    }
})();
