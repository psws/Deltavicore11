(function () {
    'use strict';

    angular
        .module("deltavi")
        .register
        .controller('indexController', indexController);

    indexController.$inject = [
        '$routeParams',
        '$location'
    ];

    function indexController($routeParams, $location) {
        //console.log("indexController init");

        var vm = this;

        this.initializeController = function () {
            vm.title = "Index Page";
        }

    }
})();

console.log("indexController");



