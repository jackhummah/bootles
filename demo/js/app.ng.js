!function e(o,t,r){function n(a,u){if(!t[a]){if(!o[a]){var i="function"==typeof require&&require;if(!u&&i)return i(a,!0);if(l)return l(a,!0);var p=new Error("Cannot find module '"+a+"'");throw p.code="MODULE_NOT_FOUND",p}var c=t[a]={exports:{}};o[a][0].call(c.exports,function(e){var t=o[a][1][e];return n(t?t:e)},c,c.exports,e,o,t,r)}return t[a].exports}for(var l="function"==typeof require&&require,a=0;a<r.length;a++)n(r[a]);return n}({1:[function(e,o,t){"use strict";!function(){angular.module("myApp",["ngRoute"])}()},{}],2:[function(e,o,t){"use strict";!function(){function e(e,o,t,r,n,l){console.log("Global Controller Init")}angular.module("myApp").controller("globalController",e),e.$inject=["$scope","$location","$route","$routeParams","$templateCache","$http"]}(),function(){function e(e,o,t,r,n,l){e.$route=t,e.$location=o,e.$routeParams=r,e.pageName="welcome",e.pageModule="index",e.errors={},e.messages={}}angular.module("myApp").controller("welcomeController",e),e.$inject=["$scope","$location","$route","$routeParams","$templateCache","$http"]}(),function(){function e(e,o,t,r,n,l){e.$route=t,e.$location=o,e.$routeParams=r,e.pageName="css",e.pageModule="css",e.errors={},e.messages={}}angular.module("myApp").controller("cssController",e),e.$inject=["$scope","$location","$route","$routeParams","$templateCache","$http"]}(),function(){function e(e,o,t,r,n,l){e.$route=t,e.$location=o,e.$routeParams=r,e.component=r.component,e.pageModule="bootstrap",e.pageName=e.component?e.component:"buttons",e.errors={},e.messages={}}angular.module("myApp").controller("bootstrapController",e),e.$inject=["$scope","$location","$route","$routeParams","$templateCache","$http"]}(),function(){function e(e,o,t,r,n,l){e.$route=t,e.$location=o,e.$routeParams=r,e.pageName="plugins",e.pageModule="plugins",e.plugin=r.plugin,e.pageName=e.plugin,e.errors={},e.messages={},e.$on("$includeContentLoaded",function(){var o=document.getElementById(e.plugin);if("undefined"!=typeof o&&null!==o){var t=o.getBoundingClientRect();document.body.scrollTop=t.top}})}angular.module("myApp").controller("pluginsController",e),e.$inject=["$scope","$location","$route","$routeParams","$templateCache","$http"]}()},{}],3:[function(e,o,t){"use strict";!function(){function e(e,o,t,r,n,l){e.$route=t,e.$location=o,e.$routeParams=r,e.pageName="swiper",e.pageModule="plugins",e.plugin=r.plugin,e.errors={},e.messages={},window.prettyPrint&&prettyPrint();new Swiper(".swiper-container",{pagination:".swiper-pagination",paginationClickable:!0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",spaceBetween:0})}angular.module("myApp").controller("pluginSwiperController",e),e.$inject=["$scope","$location","$route","$routeParams","$templateCache","$http"]}()},{}],4:[function(e,o,t){"use strict";!function(){function e(e,o,t){e.when("/",{templateUrl:"demo/partials/welcome.html",controller:"welcomeController"}).when("/bootstrap",{templateUrl:"demo/partials/bootstrap.html",controller:"bootstrapController"}).when("/bootstrap/:component",{templateUrl:"demo/partials/bootstrap.html",controller:"bootstrapController"}).when("/css",{templateUrl:"demo/partials/css.html",controller:"cssController"}).when("/plugins/:plugin",{templateUrl:"demo/partials/plugins.html",controller:"pluginsController"}).otherwise({redirectTo:"/"})}angular.module("myApp").config(e),e.$inject=["$routeProvider","$locationProvider","$httpProvider"]}()},{}]},{},[1,4,2,3]);
//# sourceMappingURL=app.ng.js.map
