import {mergeSort} from "./merge-sort";

let input: Array<number> = Array(40).fill(0).map(() => Math.round(Math.random() * 40));

let expected: Array<number> = input.slice();
expected.sort((a,b) => { return a - b });

describe("test bubble-sort", () => {
    it("should return", () => {
        const res = mergeSort(input);
        expect(res).toEqual(expected);
    })
})

