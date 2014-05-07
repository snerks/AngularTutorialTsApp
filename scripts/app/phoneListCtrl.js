/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-resource.d.ts" />
/// <reference path="phoneCatApp.ts" />

var phoneListCtrl = (function () {
    // constructor(private $scope: IpersonCtrlScope, private $http: ng.IHttpService, private $resource: ng.resource.IResourceService) {
    function phoneListCtrl($scope) {
        this.$scope = $scope;
        this.controllerId = phoneListCtrl.staticControllerId;
        $scope.phones = [
            {
                'name': 'Nexus S',
                'snippet': 'Fast just got faster with Nexus S.'
            },
            {
                'name': 'Motorola XOOM™ with Wi-Fi',
                'snippet': 'The Next, Next Generation tablet.'
            },
            {
                'name': 'MOTOROLA XOOM™',
                'snippet': 'The Next, Next Generation tablet.'
            }
        ];

        $scope.name = "World";
    }
    phoneListCtrl.staticControllerId = "phoneListCtrl";
    return phoneListCtrl;
})();

// Update the app1 variable name to be that of your module variable
phoneCatApp.controller(phoneListCtrl.staticControllerId, [
    '$scope', function ($scope) {
        return new phoneListCtrl($scope);
    }
]);
//# sourceMappingURL=phoneListCtrl.js.map
