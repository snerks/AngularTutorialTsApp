/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-resource.d.ts" />
/// <reference path="app1.ts" />

interface IPersonCtrlScope extends ng.IScope {
    greeting: string;
    changeGreeting: () => void;
}

interface IPersonCtrl {
    controllerId: string;
}

class personCtrl implements IPersonCtrl {
    static staticControllerId: string = "personCtrl";
    controllerId: string = personCtrl.staticControllerId;

    // constructor(private $scope: IpersonCtrlScope, private $http: ng.IHttpService, private $resource: ng.resource.IResourceService) {
    constructor(private $scope: IPersonCtrlScope) {
        $scope.greeting = "Good day.";
        $scope.changeGreeting = () => this.changeGreeting();
    }

    changeGreeting() {
        this.$scope.greeting = "Bye";
    }
}

// Update the app1 variable name to be that of your module variable
//app1.controller(personCtrl.controllerId, ['$scope', '$http', '$resource', ($scope, $http, $resource) =>
//    new personCtrl($scope, $http, $resource)
//]);
app1.controller(personCtrl.staticControllerId, ['$scope', ($scope) =>
    new personCtrl($scope)
]);