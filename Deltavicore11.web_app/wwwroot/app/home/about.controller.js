(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('aboutController', aboutController);

    aboutController.$inject = [
        '$routeParams',
        '$location'
    ];

    function aboutController($routeParams, $location) {
        /* jshint validthis:true */
        var vm = this;

        this.initializeController = function () {
            vm.title = "About";
        };

        activate();

        function activate() { }
    }
})();


