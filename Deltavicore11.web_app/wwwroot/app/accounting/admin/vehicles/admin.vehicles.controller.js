(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('adminVehiclesController', adminVehiclesController);

    adminVehiclesController.$inject = ['$location'];

    function adminVehiclesController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Vehicles Administration';

        activate();

        function activate() { }
    }
})();
