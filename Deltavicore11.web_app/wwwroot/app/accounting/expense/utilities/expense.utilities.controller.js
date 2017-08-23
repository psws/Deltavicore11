(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('expenseUtilitiesController', expenseUtilitiesController);

    expenseUtilitiesController.$inject = ['$location'];

    function expenseUtilitiesController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Utilities Expense Entry';

        activate();

        function activate() { }
    }
})();
