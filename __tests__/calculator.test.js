const calculator = require("../calculator");

describe("Calculator tests", () =>{
    test("adding 1 + 2 return 3", () =>{
        expect(calculator.cal(1,2,"+")).toBe(3);
    });

    test("adding 4 - 2 return 2", () =>{
        expect(calculator.cal(4,2,"-")).toBe(2);
    });

    test("adding 3 * 2 return 6", () =>{
        expect(calculator.cal(3,2,"*")).toBe(6);
    });

    test("adding 10 / 5 should not return 2", () =>{
        expect(calculator.cal(10,5,"/")).not.toBe(2);
    });
    
    test("adding 19 % 4 should return 3", () =>{
        expect(calculator.cal(19,4,"%")).toBe(3);
    });
    


});
