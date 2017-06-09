(function () {
    'use strict';

    angular.module("deltavi").register.controller('indexController', indexController);

    indexController.$inject = [
        '$routeParams',
        '$location'
    ];

    function indexController($routeParams, $location) {
        //console.log("indexController init");

        var vm = this;

        this.initializeController = function () {
            vm.title = "Index Page";
        }

    }
})();

console.log("indexController");

(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('aboutController', aboutController);

    aboutController.$inject = [
        '$routeParams',
        '$location'
    ];

    function aboutController($routeParams, $location) {
        /* jshint validthis:true */
        var vm = this;

        this.initializeController = function () {
            vm.title = "About The Sample Application";
        };

        activate();

        function activate() { }
    }
})();



(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('contactController', contactController);

    contactController.$inject = ['$location']; 

    function contactController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'contactController';

        activate();

        function activate() { }
    }
})();
(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('aboutController', aboutController);

    aboutController.$inject = [
        '$routeParams',
        '$location'
    ];

    function aboutController($routeParams, $location) {
        /* jshint validthis:true */
        var vm = this;

        this.initializeController = function () {
            vm.title = "About The Sample Application";
        };

        activate();

        function activate() { }
    }
})();



(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('contactController', contactController);

    contactController.$inject = ['$location']; 

    function contactController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'contactController';

        activate();

        function activate() { }
    }
})();
(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('aboutController', aboutController);

    aboutController.$inject = [
        '$routeParams',
        '$location'
    ];

    function aboutController($routeParams, $location) {
        /* jshint validthis:true */
        var vm = this;

        this.initializeController = function () {
            vm.title = "About The Sample Application";
        };

        activate();

        function activate() { }
    }
})();



(function () {
    'use strict';

    angular
        .module('deltavi')
        .register
        .controller('contactController', contactController);

    contactController.$inject = ['$location']; 

    function contactController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'contactController';

        activate();

        function activate() { }
    }
})();