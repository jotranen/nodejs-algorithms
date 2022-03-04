import { assert } from "console";
import {bubbleSort} from "./bubble-sort";

let arrIn: Array<number> = Array(40).fill(0).map(() => Math.round(Math.random() * 40));
let arrOut = arrIn.sort((a,b) => { return a - b });

console.log(arrIn);
console.log(arrOut);

describe("test bubble-sort", () => {
    it("should return", () => {
        bubbleSort(arrIn);
    })
})

