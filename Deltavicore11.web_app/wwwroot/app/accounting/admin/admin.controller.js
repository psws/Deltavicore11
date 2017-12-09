(function () {
    'use strict';

    angular
        .module("deltavi")
        .register
        .controller('adminController', adminController)
        ;

    adminController.$inject = [
        '$location',
        '$state',
        'tabService'

    ];



    function adminController( $location, $state, tabService) {
        //console.log("indexController init");

        var vm = this;
        vm.title = "Deltavi Admin";
        vm.tabs = [];
        vm.Selectedtab = "3"; //sets initial tab

        vm.tabs = tabService.GetAllTabs('/app/accounting/admin/admin.tabs.json').then(function (data) {
             vm.tabs = data;
             console.log('adminController GetAllTabs() success...');
       });
 

        vm.scrlTabsApi = {};
        vm.tab1Show = false;

        //vm.tabs = [
        //    { title: "Providers", route: "provider", content: "Tab 0 Content", active: false, show: "$scope.tab1Show" },
        //    { title: "Farms", route: "farms", content: "Tab 1 Content", active: true, show: true },
        //    { title: "Feed", route: "feed", content: "Tab 2 Content", active: true, show: true },
        //    { title: "Vehicles", route: "vehicles", content: "Tab 3 Content", active: true, show: true },
        //    { title: "Tab 4", route: "tab4", content: "Tab 4 Content", active: true, show: "$scope.tab1Show" }
        //];

        //vm.tabs = [
        //    { "title": "Providers", "route": "provider", "content": "Tab 0 Content", "active": false, "show": "$scope.tab1Show" },
        //    { "title": "Farms", "route": "farms", "content": "Tab 1 Content", "active": true, "show": true },
        //    { "title": "Feed", "route": "feed", "content": "Tab 2 Content", "active": true, "show": true },
        //    { "title": "Vehicles", "route": "vehicles", "content": "Tab 3 Content", "active": true, "show": true },
        //    { "title": "Tab 4", "route": "tab4", "content": "Tab 4 Content", "active": true, "show": "$scope.tab1Show" }
        //];

        vm.tabSelected = function (route) {
            $state.go(route);
        };

        //vm.tabSelected = function (route, index) {
        //    vm.Selectedtab = index;
        //    $state.go(route);
        //};

        //vm.tab1 = {
        //    heading: 'Provider Maintenance',
        //    templateUrl: '/app/home/personcomponent.html'
        //};

        //vm.tab2 = {
        //    heading: 'Provider Maintenance2',
        //    templateUrl: '/app/poultryfeed/personcomponent.html'
        //};

        //for (var i = 0; i < 15; i++) {
        //    vm.tabs.push({
        //        heading: 'Tab ' + i,
        //        content: 'This is the content for tab ' + i
        //    });
        //}



        //  http://plnkr.co/edit/YJNDaQ?p=preview
        //  https://github.com/VersifitTechnologies/angular-ui-tab-scroll
        vm.reCalcScroll = function () {
            if (vm.scrlTabsApi.doRecalculate) {
                vm.scrlTabsApi.doRecalculate();
            }
        };

        vm.scrollIntoView = function (arg) {
            if (vm.scrlTabsApi.scrollTabIntoView) {
                vm.scrlTabsApi.scrollTabIntoView(arg);
            }
        };

        vm.addTab = function () {
            vm.tabs.push({
                heading: 'New Tab ' + vm.tabs.length,
                content: 'This is the content for a NEW tab ' + vm.tabs.length
            });
        };

        vm.removeTab = function () {
            vm.tabs.splice(vm.tabs.length - 1, 1);
        };


    }

})();




