/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-resource.d.ts" />
/// <chutzpah_reference path="/scripts/angular.js" />

interface IPhoneCatApp extends ng.IModule { }

// Create the module and define its dependencies.
var phoneCatApp: IPhoneCatApp = angular.module('phoneCatApp', [
    // Angular modules 
    // 'ngResource',       // $resource for REST queries
    // 'ngAnimate',        // animations
    // 'ngRoute'           // routing

    // Custom modules 

    // 3rd Party Modules
]);

// Execute bootstrapping code and any dependencies.
phoneCatApp.run(['$q', '$rootScope', ($q, $rootScope) => {

}]);
