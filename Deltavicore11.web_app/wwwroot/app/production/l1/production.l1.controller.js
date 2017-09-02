(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('productionL1Controller', productionL1Controller);

    productionL1Controller.$inject = ['$location'];

    function productionL1Controller($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Production L1 Entry';

        activate();

        function activate() { }
    }
})();
