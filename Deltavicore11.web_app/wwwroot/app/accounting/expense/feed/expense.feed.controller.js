(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('expenseFeedController', expenseFeedController);

    expenseFeedController.$inject = ['$location'];

    function expenseFeedController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Feed Expense Entry';

        activate();

        function activate() { }
    }
})();
