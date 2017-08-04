(function () {
    'use strict';

    // controller
    var PersonController = function () {

        var vm = this;
        vm.firstName = "Aftab";
        vm.lastName = "Ansari";

        vm.todo = function () {
            vm.firstName = "djt";
        };
    }

    angular
        .module("deltavi")
        .controller('PersonController', PersonController);

    // component
    angular.module('deltavi').component('personComponent', {
        templateUrl: 'personcomponent.html',
        controller: PersonController,
        controllerAs: 'vm'

    });

})();

