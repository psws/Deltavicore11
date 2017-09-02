(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('adminFarmsController', adminFarmsController);

    adminFarmsController.$inject = ['$location'];

    function adminFarmsController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Farms Administration';

        activate();

        function activate() { }
    }
})();
