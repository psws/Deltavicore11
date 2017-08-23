(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('expenseSuppliesController', expenseSuppliesController);

    expenseSuppliesController.$inject = ['$location'];

    function expenseSuppliesController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Supplies Expense Entry';

        activate();

        function activate() { }
    }
})();
