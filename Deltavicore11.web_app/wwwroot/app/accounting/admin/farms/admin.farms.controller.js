(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('adminFarmsController', adminFarmsController);

    adminFarmsController.$inject = ['ajaxService', 'alertService', '$location'];

    function adminFarmsController(ajaxService, alertService, $location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Farms Administration';
        vm.pdffilename = 'farms.pdf';
        vm.csvFilename = 'farms.csv';
        vm.reportHeader = 'Farms';


        vm.gridOpts = {};
        //$scope.gridOpts = {};

        vm.gridOpts = {
            auroResize: true,
            enableGridMenu: true,
            enableSelectAll: true,
            exporterCsvFilename: vm.csvFilename,
            exporterPdfFilename: vm.pdffilename,
            exporterPdfDefaultStyle: { fontSize: 9 },
            exporterPdfTableStyle: { margin: [30, 30, 30, 30] },
            exporterPdfTableHeaderStyle: {
                fontSize: 10, bold: true, italics: true, color: 'red', background: 'yellow', fillColor: 'yellow'
            },
            exporterPdfHeader: { text: vm.reportHeader, style: 'headerStyle' },
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
                vm.gridApi = gridApi;
            },
            columnDefs: [
                { name: 'Farm', field: 'farmName' },
                { name: 'create date', field: 'creationDateTime' },
                { name: 'Active', field: 'isActive' }


            ]
            //columnDefs: [
            //    { name: 'first1', field: 'firstName' },
            //    { name: 'last', field: 'lastName' },
            //    { name: 'Provider', field: 'providerName' }
            //]

            //data: [
            //    { "firstName": "Cox", "lastName": "Carney", "providerName": 'data[0].providerName '},
            //    { "firstName": "Jim", "lastName": "Sullivan", "providerName": "ypg" }
            //],
        };

        ajaxService.ajaxGet('api/Farm/GetFarms')
            .then(function (response) {
                //var dbdata = angular.fromJson(response.data.model);
                var dbdata = response.data.model;
                var dbdata2 = [];

                if (!Array.isArray(dbdata)) {
                    dbdata2[0] = dbdata;
                    vm.gridOpts.data = dbdata2;
                } else {
                    vm.gridOpts.data = dbdata;
                }



                //$scope.gridOpts.data[0].providerName = dbdata.providerName;
                //    //$scope.$apply();
                // $scope.gridOpts.data=  dbdata;

            }).catch(function (response) {
                console.log('GetFarms ajax  error...');
                alertService.RenderErrorMessage(response.ReturnMessage);
            });



    }


})();
