var SampleClass = (function () {
    function SampleClass(numberValue) {
        this.numberValue = numberValue;
    }
    SampleClass.prototype.setNumber = function (numberValue) {
        this.numberValue = numberValue;
    };

    SampleClass.prototype.getSquare = function () {
        return this.numberValue * this.numberValue;
    };
    return SampleClass;
})();
//# sourceMappingURL=sampleClass.js.map
