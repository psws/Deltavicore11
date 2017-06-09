(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('contactController', contactController);

    contactController.$inject = ['$location']; 

    function contactController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'contactController';

        activate();

        function activate() { }
    }
})();

