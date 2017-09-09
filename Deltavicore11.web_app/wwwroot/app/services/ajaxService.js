(function () {
    'use strict';

    console.log("ajax service");

    angular.module('deltavi')
        .service('ajaxService', ajaxService);

    ajaxService.$inject = [
        '$http',
        '$q',
        'blockUI'
    ];

    function ajaxService($http, $q, blockUI) {

        "use strict";
        var vm = this;
        var service = {

            ajaxPost: function (data, route, successFunction, errorFunction) {

                blockUI.start();
                $http({
                    method: 'POST',
                    url: route,
                    data: data
                })
                   .then(function (response, status, headers, config) {
                        //First function handles success
                        blockUI.stop();
                        successFunction(response);
                    }, function (response, status, headers, config) {
                        blockUI.stop();
                        //Second function handles error
                        errorFunction("Something went wrong", response);
                    });

            },

            ajaxGet: function ( route) {

                blockUI.start();

                var deferred = $q.defer();
                $http({
                    method: 'GET',
                    url: route,
                    //params: 'limit=10, sort_by=created:desc',
                    //headers: { 'Authorization': 'Token token=xxxxYYYYZzzz'}
                }).then(function (response) {
                    blockUI.stop();
                    deferred.resolve(response);
                }).catch(function (response) {
                    blockUI.stop();
                    deferred.reject("Ajax Request Failed!");
                });
                return deferred.promise;
            }




                //$http({
                //    method: 'GET',
                //    url: route,
                //})
                //    .then(function (response,status, headers, config) {
                //        //First function handles success
                //        blockUI.stop();
                //        successFunction(response);
                //    }, function (response, status, headers, config) {
                //        blockUI.stop();
                //        //Second function handles error
                //        errorFunction("Something went wrong", response);
                //    });

            //}


        }

        return service;
    }

})();
