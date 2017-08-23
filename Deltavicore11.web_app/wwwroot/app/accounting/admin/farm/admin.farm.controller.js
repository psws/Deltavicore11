(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('adminFarmController', adminFarmController);

    adminFarmController.$inject = ['$location'];

    function adminFarmController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Farm Administration';

        activate();

        function activate() { }
    }
})();
