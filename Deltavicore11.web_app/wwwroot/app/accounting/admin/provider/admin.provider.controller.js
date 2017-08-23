(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('adminProviderController', adminProviderController);

    adminProviderController.$inject = ['$location'];

    function adminProviderController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Provider Administration';

        activate();

        function activate() { }
    }
})();
