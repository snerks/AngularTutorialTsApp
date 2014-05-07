/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../app/phoneCatApp.ts" />
/// <reference path="../../app/phoneListCtrl.ts" />
/// <reference path="../../typings/jasmine/jasmine.d.ts" />
/// <chutzpah_reference path="/scripts/angular.js" />
/// <chutzpah_reference path="/scripts/angular-mocks.js" />
/// <chutzpah_reference path="/scripts/app/phonecatapp.js" />
describe('phoneListCtrl', function () {
    //it('should have correct static controllerId', () => {
    //    // Arrange
    //    // Act
    //    var result = phoneListCtrl.staticControllerId;
    //    // Assert
    //    expect(result).toBe("phoneListCtrl");
    //});
    beforeEach(angular.mock.module('phoneCatApp'));

    it('should create "phones" model with 3 phones', angular.mock.inject(function ($controller) {
        var scope = {}, ctrl = $controller('phoneListCtrl', { $scope: scope });

        expect(scope.phones.length).toBe(3);
    }));

    it('should create "phones" model with correct name', angular.mock.inject(function ($controller) {
        var scope = {}, ctrl = $controller('phoneListCtrl', { $scope: scope });

        expect(scope.name).toBe('World');
    }));
});
//# sourceMappingURL=phoneListCtrlSpec.js.map
