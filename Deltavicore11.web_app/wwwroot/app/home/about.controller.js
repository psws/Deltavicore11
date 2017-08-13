(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('aboutController', aboutController);

    aboutController.$inject = [
        '$location'
    ];

    function aboutController($location) {
        /* jshint validthis:true */
        var vm = this;
        //vm.title = "About";


        this.initializeController = function () {
            vm.title = "About";
        };

        activate();

        function activate() { }
    }
})();


