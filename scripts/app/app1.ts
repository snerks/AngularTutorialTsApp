/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-resource.d.ts" />
/// <chutzpah_reference path="/scripts/angular.js" />

interface Iapp1 extends ng.IModule { }

// Create the module and define its dependencies.
var app1: Iapp1 = angular.module('app1', [
    // Angular modules 
    // 'ngResource',       // $resource for REST queries
    // 'ngAnimate',        // animations
    // 'ngRoute'           // routing

    // Custom modules 

    // 3rd Party Modules
]);

// Execute bootstrapping code and any dependencies.
app1.run(['$q', '$rootScope', ($q, $rootScope) => {

}]);
