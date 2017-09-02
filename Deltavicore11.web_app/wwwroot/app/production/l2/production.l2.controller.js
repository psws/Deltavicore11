(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('productionL2Controller', productionL2Controller);

    productionL2Controller.$inject = ['$location'];

    function productionL2Controller($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Production L2 Entry';

        activate();

        function activate() { }
    }
})();
