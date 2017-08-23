(function () {
    'use strict';
//https://embed.plnkr.co/XkxLgT/

    angular
        .module('deltavi')
        .component('index', {
            //template: '<div>' +
            //' <h4> {{$ctrl.title }} </h4>' +
            //'    <p>' +
            //'       If you have any technical questions regarding this sample application, you can contact psws.com at' +
            //'     <a href="markcap@hotmail.com">markcap@hotmail.com</a>' +
            //'    </p>' +
            //'</div >' +
            //'<div ui-view></div>',
            templateUrl: '/app/home/index.html',
            controller: function () {
                var vm = this;
                this.title = 'Indexs';
                vm.form = {
                    username: 'admin',
                    password: null
                };
                vm.tabs = [];
                vm.scrlTabsApi = {};

                vm.tab1 = {
                    heading: 'Provider Maintenance',
                    templateUrl: '/app/home/personcomponent.html'
                };

                vm.tab2 = {
                    heading: 'Provider Maintenance2',
                    templateUrl: '/app/poultryfeed/personcomponent.html'
                };

                for (var i = 0; i < 15; i++) {
                    vm.tabs.push({
                        heading: 'Tab ' + i,
                        content: 'This is the content for tab ' + i
                    });
                }

           },
            controllerAs: 'vm'
        });
})();