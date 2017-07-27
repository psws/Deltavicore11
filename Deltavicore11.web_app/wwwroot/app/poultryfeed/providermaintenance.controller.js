(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('providerMaintenanceController', providerMaintenanceController);

    providerMaintenanceController.$inject = [
        '$location'
    ];



    function providerMaintenanceController($location) {
        /* jshint validthis:true */
        var vm = this;

        vm.form = {
            username: 'admin',
            password: null
        };

        this.initializeController = function () {
            vm.title = "Provider Maintenance";
        }


    }


})();
