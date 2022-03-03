import { bubbleSort } from "./bubble-sort";

let arr: Array<number> = [5, 1, 4, 2, 8];

console.log(`------------------------------`);
console.log(`input         : ${arr}`);
const sorted = bubbleSort(arr);
console.log(`input-after   : ${arr}`);
console.log(`bubble-sorted : ${sorted}`);

console.log(`------------------------------`);
