(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('adminProvidersController', adminProvidersController);

    adminProvidersController.$inject = ['$location'];

    function adminProvidersController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Providers Administration';

        activate();

        function activate() { }
    }
})();
