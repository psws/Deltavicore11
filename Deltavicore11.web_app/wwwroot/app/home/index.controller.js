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
        vm.form = {
            username: 'admin',
            password: null
        };

        this.initializeController = function () {
            vm.title = "Index Page";
        }

        vm.ProviderMaintenance = function () {
            $location.path("PoultryFeed/ProviderMaintenance");
        }

    }
})();

console.log("indexController");



