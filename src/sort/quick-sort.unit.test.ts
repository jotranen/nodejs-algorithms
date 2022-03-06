import {quickSort} from "./quick-sort";

let input: Array<number> = Array(10).fill(0).map(() => Math.round(Math.random() * 40));

let expected: Array<number> = input.slice();
expected.sort((a,b) => { return a - b });

describe("test quick-sort", () => {
    it("should return", () => {
        const res = quickSort(input, 0, input.length - 1);
        expect(res).toEqual(expected);
    })
})

