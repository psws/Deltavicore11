(function () {
    'use strict';
//https://embed.plnkr.co/XkxLgT/

    angular
        .module('deltavi')
       .component('contact', {
            //template: '<div>' +
            //' <h4> {{$ctrl.title }} </h4>' +
            //'    <p>' +
            //'       If you have any technical questions regarding this sample application, you can contact psws.com at' +
            //'     <a href="markcap@hotmail.com">markcap@hotmail.com</a>' +
            //'    </p>' +
            //'</div >' +
            //'<div ui-view></div>',
            templateUrl: '/app/home/contact.html',
            controller: function () {
                var vm = this;
                this.title = 'Contacts';
            },
            controllerAs: 'vm'
        });
})();