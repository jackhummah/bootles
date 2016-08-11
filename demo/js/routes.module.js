(function() {
    'use strict'
    
    angular
        .module('myApp')
        .config(config);
    
    config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];
    
    function config($routeProvider, $locationProvider, $httpProvider) {
        // $httpProvider.defaults.headers.common['X-PJAX'] = true;
        // $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        // $locationProvider.html5Mode(true);
        
        $routeProvider.
            when('/', {
                templateUrl: 'demo/partials/welcome.html',
                controller: 'welcomeController'
            }).
            when('/bootstrap', {
                templateUrl: 'demo/partials/bootstrap.html',
                controller: 'bootstrapController'
            }).
            when('/bootstrap/:component', {
                templateUrl: 'demo/partials/bootstrap.html',
                controller: 'bootstrapController'
            }).
            when('/css', {
                templateUrl: 'demo/partials/css.html',
                controller: 'cssController'
            }).
            when('/components', {
                templateUrl: 'demo/partials/components.html',
                controller: 'componentsController'
            }).
            // when('/portfolio/:phoneId', {
                // templateUrl: 'demo/partials/phone-detail.html',
                // controller: 'PhoneDetailCtrl'
            // }).
            otherwise({
                redirectTo: '/'
            });
        
    }
})();

