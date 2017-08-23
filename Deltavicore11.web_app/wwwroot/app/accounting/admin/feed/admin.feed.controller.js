(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('adminFeedController', adminFeedController);

    adminFeedController.$inject = ['$location'];

    function adminFeedController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Feed Administration';

        activate();

        function activate() { }
    }
})();
