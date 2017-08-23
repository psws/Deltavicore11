(function () {
    'use strict';

    angular
        .module('deltavi')
        .service('tabService', tabService);

    tabService.$inject = [
        '$http',
        '$q'
    ];

    function tabService($http, $q) {
        /* jshint validthis:true */
        var vm = this;
        //https://embed.plnkr.co/XkxLgT/

        var service = {
            GetAllTabs: function (jsonTabFile) {
                //    $http.get(jsonTabFile, { cache: true })
                //        .success(function (data) {
                //            var tmp = resp.data;
                //            return data;
                //        })

                //}
                //https://stackoverflow.com/questions/44653521/object-doesnt-support-property-or-method-success-in-angularjs
                var deferred = $q.defer();
                $http({
                    method: 'GET',
                    url: jsonTabFile
                    //params: 'limit=10, sort_by=created:desc',
                    //headers: { 'Authorization': 'Token token=xxxxYYYYZzzz'}
                }).then(function (response) {
                    console.log('GetAllTabs success...');
                    deferred.resolve(response.data);
                }).catch(function (response) {
                    console.log('GetAllTabs error...');
                    deferred.reject("Tab file Failed to load!");
                    });
                return deferred.promise;
           }



            //getPerson: function (id) {
            //    function personMatchesParam(person) {
            //        return person.id === id;
            //    }

            //    return service.getAllPeople().then(function (people) {
            //        return people.find(personMatchesParam)
            //    });
            //}
        };

        return service;
    }

})();
