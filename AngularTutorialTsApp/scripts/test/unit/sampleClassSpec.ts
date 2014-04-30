﻿/// <reference path="../../app/sampleClass.ts" />
/// <reference path="../../typings/jasmine/jasmine.d.ts" />

//Test suite
describe('SampleClass', () => {

    //Setup
    beforeEach(() => {
        obj.setNumber(10);
    });

    //Spec - 1
    it('setNumber sets correct numberValue', () => {
        expect(obj.numberValue).not.toBe(null);
        expect(obj.numberValue).toBe(10);
    });

    //Spec - 2
    it('getSquare returns correct result', () => {
        expect(obj.getSquare()).toBe(100);
    });

    //Teardown
    afterEach(() => {
        obj.setNumber(null);
    });
});

var obj = new SampleClass(null);