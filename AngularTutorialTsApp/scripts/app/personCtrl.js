/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-resource.d.ts" />
/// <reference path="app1.ts" />

var personCtrl = (function () {
    // constructor(private $scope: IpersonCtrlScope, private $http: ng.IHttpService, private $resource: ng.resource.IResourceService) {
    function personCtrl($scope) {
        var _this = this;
        this.$scope = $scope;
        this.controllerId = personCtrl.staticControllerId;
        $scope.greeting = "Good day.";
        $scope.changeGreeting = function () {
            return _this.changeGreeting();
        };
    }
    personCtrl.prototype.changeGreeting = function () {
        this.$scope.greeting = "Bye";
    };
    personCtrl.staticControllerId = "personCtrl";
    return personCtrl;
})();

// Update the app1 variable name to be that of your module variable
//app1.controller(personCtrl.controllerId, ['$scope', '$http', '$resource', ($scope, $http, $resource) =>
//    new personCtrl($scope, $http, $resource)
//]);
app1.controller(personCtrl.staticControllerId, [
    '$scope', function ($scope) {
        return new personCtrl($scope);
    }
]);
//# sourceMappingURL=personCtrl.js.map
