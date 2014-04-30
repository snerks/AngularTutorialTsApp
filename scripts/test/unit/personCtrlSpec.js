/// <reference path="../../app/app1.ts" />
/// <reference path="../../app/personCtrl.ts" />
/// <reference path="../../typings/jasmine/jasmine.d.ts" />
describe('personCtrl', function () {
    it('should have correct static controllerId', function () {
        // Arrange
        // Act
        var result = personCtrl.staticControllerId;

        // Assert
        expect(result).toBe("personCtrl");
    });

    it('should create default model with correct instance controllerId', function () {
        // Arrange
        var scope = {}, sut = new personCtrl(scope);

        // Act
        var result = sut.controllerId;

        // Assert
        expect(result).toBe("personCtrl");
    });

    it('should have correct greeting', function () {
        // Arrange
        var scope = {}, sut = new personCtrl(scope);

        // Act
        var result = scope.greeting;

        // Assert
        expect(result).toBe("Good day.");
    });

    it('changeGreeting should set correct greeting', function () {
        // Arrange
        var scope = {}, sut = new personCtrl(scope);

        // Act
        sut.changeGreeting();
        var result = scope.greeting;

        // Assert
        expect(result).toBe("Bye");
    });
});
//# sourceMappingURL=personCtrlSpec.js.map
