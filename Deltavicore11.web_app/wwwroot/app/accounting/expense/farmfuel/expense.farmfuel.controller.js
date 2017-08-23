(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('expenseFarmFuelController', expenseFarmFuelController);

    expenseFarmFuelController.$inject = ['$location'];

    function expenseFarmFuelController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Farm Fuel Expense Entry';

        activate();

        function activate() { }
    }
})();
