(function () {
    'use strict';


    angular.module('deltavi')
        .controller('NavigationCtrl', NavigationCtrl);

    NavigationCtrl.$inject = [];

    function NavigationCtrl() {
        var vm = this;
        vm.isCollapsed = true;
        //vm.toggleCollapse = toggleCollapse;
        //vm.toggleCollapse();

        vm.initializeController = function () {
            vm.isCollapsed = true;
        }

        vm.toggleCollapse = function () {
            vm.isCollapsed = !vm.isCollapsed;
        }
        vm.Collapse = function () {
            vm.isCollapsed = true;
        }


    }


})();
