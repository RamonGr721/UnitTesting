const calculator = require("../calculator");

describe("Calculator tests", () =>{
    test("adding 1 + 2 return 3", () =>{
        expect(calculator.sum(1,2)).toBe(3);
    });

    test("2 - 2 should NOT return 1", () => {
        expect(calculator.diff(2,2)).not.toBe(1);
    });

    test("2 * 2 should return 4", () => {
        expect(calculator.multiply(2,2)).toBe(4);
    });

    test("6 / 3 should return 2", () => {
        expect(calculator.divide(6,3)).toBe(2);
    });
});