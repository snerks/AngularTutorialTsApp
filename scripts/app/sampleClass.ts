class SampleClass {
    numberValue: number;

    constructor(numberValue: number) {
        this.numberValue = numberValue;
    }

    setNumber(numberValue: number) {
        this.numberValue = numberValue;
    }

    getSquare() {
        return this.numberValue * this.numberValue;
    }
} 