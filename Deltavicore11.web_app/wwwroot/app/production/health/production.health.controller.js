(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('productionHealthController', productionHealthController);

    productionHealthController.$inject = ['$location'];

    function productionHealthController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Production Health Entry';

        activate();

        function activate() { }
    }
})();
