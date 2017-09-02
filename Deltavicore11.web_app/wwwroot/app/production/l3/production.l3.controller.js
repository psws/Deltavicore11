(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('productionL3Controller', productionL3Controller);

    productionL3Controller.$inject = ['$location'];

    function productionL3Controller($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Production L3 Entry';

        activate();

        function activate() { }
    }
})();
