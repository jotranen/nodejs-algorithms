/**
 * Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements 
 * if they are in wrong order
 */

export function bubbleSort(input: Array<number>) : Array<number>{

    let arr = [...input]; 

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {

            // swap
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }

    return arr;
}

// module.exports = bubbleSort;