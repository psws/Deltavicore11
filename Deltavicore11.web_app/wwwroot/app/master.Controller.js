console.log("master controller start");

(function () {
    'use strict';

    angular
        .module('deltavi')
        .controller('masterController', masterController);

    masterController.$inject = [ '$location', 'ajaxService', 'applicationConfiguration'
    ];

    function masterController( $location, ajaxService, applicationConfiguration) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'masterController';
        this.initializeController = function () {
            vm.applicationVersion = applicationConfiguration.version;
        }
        //    activate();

        //    function activate() { }
    }
})();

//console.log("master controller");
//    angular.module('deltavi').controller('masterController',
//        ['$routeParams', '$location', 'ajaxService', 'applicationConfiguration',
//            function ($routeParams, $location, ajaxService, applicationConfiguration) {

//                var vm = this;

//                this.initializeController = function () {
//                    vm.applicationVersion = applicationConfiguration.version;
//                }

//            }]);

console.log("master controller done");

