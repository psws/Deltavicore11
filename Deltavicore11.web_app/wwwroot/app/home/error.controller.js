(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('errorController', errorController);

    errorController.$inject = ['$location']; 

    function errorController($location) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }

        this.initializeController = function () {
            vm.title = "Error";
        };

    }
})();
