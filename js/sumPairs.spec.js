const sumPairs = require("./sumPairs");

describe("sumPairs", () => {
    test("sumPairs([1, 2, 3, 4, 5], 9) == [[4, 5]]", () => {
        expect(sumPairs([1, 2, 3, 4, 5], 9)).toStrictEqual([[4, 5]]);
    });

    test("sumPairs([1, 2, 3, 4, 5], 7) == [[2, 5], [3, 4]]", () => {
        expect(sumPairs([1, 2, 3, 4, 5], 7)).toStrictEqual([[2, 5], [3, 4]]);
    });

    test("sumPairs([3, 1, 5, 8, 2], 27) == 'unable to find pairs'", () => {
        expect(sumPairs([3, 1, 5, 8, 2], 27)).toStrictEqual("unable to find pairs");
    });


 
})

