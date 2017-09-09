(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('adminProvidersController', adminProvidersController);

    adminProvidersController.$inject = ['$scope','ajaxService', 'alertService', '$location'];

    function adminProvidersController($scope, ajaxService, alertService, $location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Providers Administration';
       //vm.providerData = {};
        //vm.providers = [];
        $scope.gridOpts = {};

        //$scope.gridOpts = {
        //    data: [
        //        { "firstName": "Cox", "lastName": "Carney", "providerName": "SRL" },
        //        { "firstName": "Jim", "lastName": "Sullivan", "providerName": "ypg" }
        //    ],
        //    columnDefs: [
        //        { name: 'first', field: 'firstName' },
        //        { name: 'last', field: 'lastName' },
        //        { name: 'Provider', field: 'providerName' }
        //    ]
        //};



        vm.providerData = [
            { "firstName": "Cox", "lastName": "Carney", "providerName": "SRL" },
            { "firstName": "Jim", "lastName": "Sullivan", "providerName": "ypg" }
        ];
        vm.providerCols =  [
            { name: 'first', field: 'firstName' },
            { name: 'last', field: 'lastName' },
            { name: 'Provider', field: 'providerName' }
        ];

        vm.provider = {
            data: [
                { "firstName": "Cox", "lastName": "Carney", "providerName": "SRL" },
                { "firstName": "Jim", "lastName": "Sullivan", "providerName": "ypg" }
            ]
        }

        vm.provider1 = {
            data: vm.providerData,
            columnDefs: vm.providerCols
        }

        //$scope.provider1 = {
        //    data: vm.providerData,
        //    columnDefs: vm.providerCols
        //}
        vm.provider2 = {};
        //$scope.gridOpts = vm.provider2;
        vm.providers = [
            { "firstName": "Cox", "lastName": "Carney", "providerName": "SRL" },
            { "firstName": "Jim", "lastName": "Sullivan", "providerName": "ypg" }
        ];

                vm.providerData1 = {
            data: 'vm.providers',
                columnDefs: [
                    { name: 'first', field: 'firstName' },
                    { name: 'last', field: 'lastName' },
                    { name: 'Provider', field: 'providerName' }
                ]
            };


        vm.providerData1 = {
            data: 'vm.providers',
                columnDefs: [
                    { name: 'first', field: 'firstName' },
                    { name: 'last', field: 'lastName' },
                    { name: 'Provider', field: 'providerName' }
                ]
            };


        //$scope.MyData = [
        //    { "firstName": "Cox", "lastName": "Carney", "providerName": "SRL" },
        //    { "firstName": "Jim", "lastName": "Sullivan", "providerName": "ypg" }
        //];


        //$scope.gridOptions = { };


        vm.getPovidersOnSuccess = function (response) {
            //var data = angular.fromJson(response.data.model);

            //vm.providerData.data = response.data.model;
            //vm.providers = response.data.model;
            //vm.providers = [
            //    { "providerName": "Cox" }
            //];
            //vm.providerData = {
            //    data: 'vm.providers',
            //    columnDefs: [
            //        { name: 'Provider', field: 'providerName' },
            //        //{ name: 'Date', field: 'creationDateTime' }
            //    ]
            //};

            //vm.providerData = {
            //    columnDefs: [
            //        { name: 'Provider', field: 'providerName' },
            //        //{ name: 'Date', field: 'creationDateTime' }
            //    ]
            //};

           // //vm.providerData.data[0].providerName = 'jiminka';

           // //$scope.MyData = response.data.model;

           // $scope.gridOptions = {
           //     data: 'MyData',
           //     columnDefs: [
           //         { name: 'Provider', field: 'providerName' },
           //         //{ name: 'Date', field: 'creationDateTime' }
           //     ]
           // };

           //// $scope.gridOptions.data[0].providerName = 'jiminka';
            //vm.providerData.firstName[0] = 'shit';


        }
    

        vm.getProvidersOnError = function (response) {
            alertService.RenderErrorMessage(response.ReturnMessage);
        }

        ajaxService.ajaxGet('api/PoultryFeed/GetProviders')
            .then(function (response) {
                //var dbdata = angular.fromJson(response.data.model);
                var dbdata = response.data.model;
                var dbdata2 = [];
                             
                if (!Array.isArray(dbdata)) {
                    dbdata2[0] = dbdata;  
                    vm.provider2 = {
                        data: dbdata2
                        ,
                        columnDefs: [
                            { name: 'Provider4', field: 'providerName' }
                        ],
                        enableGridMenu: true
                    };
                } else {
                    vm.provider2 = {
                        data: dbdata
                        ,
                        columnDefs: [
                            { name: 'Provider6', field: 'providerName' }
                        ]
                        ,
                        enableGridMenu: true,
                        enableSelectAll: true,
                        exporterCsvFilename: 'deltavi.csv',
                        exporterPdfDefaultStyle: { fontSize: 9 },
                        exporterPdfTableStyle: { margin: [30, 30, 30, 30] },
                        exporterPdfTableHeaderStyle: {
                            fontSize: 10, bold: true, italics: true, color: 'red'},
                        exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
                        exporterPdfFooter: function (currentPage, pageCount) {
                            return {
                                text: currentPage.toString() + ' of ' + pageCount.toString(), style:
                                    'footerStyle'
                            };
                        },
                        exporterPdfCustomFormatter: function (docDefinition) {
                            docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
                            docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
                            return docDefinition;
                        },
                        exporterPdfOrientation: 'portrait',
                        exporterPdfPageSize: 'LETTER',
                        exporterPdfMaxGridWidth: 500,
                        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link- location")),
                        onRegisterApi: function (gridApi) {
                            $scope.gridApi = gridApi;
                         }
                    };
               }


         //https://stackoverflow.com/questions/28770778/sharing-scope-with-celltemplate-using-ui-grid
               //vm.provider2 = {
               //     data: vm.providerData,
               //     columnDefs: vm.providerCols
               // }
               //vm.provider2.data = vm.providerData;
                //$scope.gridOpts = {
                //    data: [
                //        { "firstName": "Cox", "lastName": "Carney", "providerName": 'data[0].providerName '},
                //        { "firstName": "Jim", "lastName": "Sullivan", "providerName": "ypg" }
                //    ],
                //    columnDefs: [
                //        { name: 'first1', field: 'firstName' },
                //        { name: 'last', field: 'lastName' },
                //        { name: 'Provider', field: 'providerName' }
                //    ]
                //};
                //$scope.gridOpts = {
                //    data: [
                //        { "providerName": 'sro' },
                //        { "providerName": "ypg" }
                //    ]
                //    ,
                //    columnDefs: [
                //        { name: 'Provider', field: 'providerName' }
                //    ]
                //};
                var dbdata2 = [];
                dbdata2[0] = dbdata[0];

                $scope.gridOpts = {
                    data: dbdata
                    ,
                    columnDefs: [
                        { name: 'Provider3', field: 'providerName' }
                    ]
                    ,
                    enableGridMenu: true,
                    enableSelectAll: true,
                    exporterCsvFilename: 'deltavi.csv',
                    exporterPdfDefaultStyle: { fontSize: 9 },
                    exporterPdfTableStyle: { margin: [30, 30, 30, 30] },
                    exporterPdfTableHeaderStyle: {
                        fontSize: 10, bold: true, italics: true, color: 'red'
                    },
                    exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
                    exporterPdfFooter: function (currentPage, pageCount) {
                        return {
                            text: currentPage.toString() + ' of ' + pageCount.toString(), style:
                            'footerStyle'
                        };
                    },
                    exporterPdfCustomFormatter: function (docDefinition) {
                        docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
                        docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
                        return docDefinition;
                    },
                    exporterPdfOrientation: 'portrait',
                    exporterPdfPageSize: 'LETTER',
                    exporterPdfMaxGridWidth: 500,
                    exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link- location")),
                    onRegisterApi: function (gridApi) {
                        $scope.gridApi = gridApi;
                    }
                };



                //$scope.gridOpts.data[0].providerName = dbdata.providerName;
                //    //$scope.$apply();
               // $scope.gridOpts.data=  dbdata;

            }).catch(function (response) {
                console.log('GetProvider ajax  error...');
                deferred.reject("api/PoultryFeed/GetProvider/1 Failed to load!");
            });



    }


})();
