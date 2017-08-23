(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('expenseCashAdnavceController', expenseCashAdnavceController);

    expenseCashAdnavceController.$inject = ['$location'];

    function expenseCashAdnavceController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Cash Advance Expense Entry';

        activate();

        function activate() { }
    }
})();
