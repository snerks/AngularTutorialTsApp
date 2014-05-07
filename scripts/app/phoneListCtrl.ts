/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-resource.d.ts" />
/// <reference path="phoneCatApp.ts" />

interface IPhoneListCtrlScope extends ng.IScope {
    phones: any[];
    name:string;
}

interface IPhoneListCtrl {
    controllerId: string;
}

class phoneListCtrl implements IPhoneListCtrl {
    static staticControllerId: string = "phoneListCtrl";
    controllerId: string = phoneListCtrl.staticControllerId;

    // constructor(private $scope: IpersonCtrlScope, private $http: ng.IHttpService, private $resource: ng.resource.IResourceService) {
    constructor(private $scope: IPhoneListCtrlScope) {
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
}

// Update the app1 variable name to be that of your module variable
phoneCatApp.controller(phoneListCtrl.staticControllerId, ['$scope', ($scope) =>
    new phoneListCtrl($scope)
]);