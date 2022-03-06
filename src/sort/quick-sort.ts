import { INSPECT_MAX_BYTES } from "buffer";
import { arrayBuffer } from "stream/consumers";

export const quickSort = (array: Array<number>, left: number = 0, right: number = array.length - 1) : Array<number> => {
    let index: number;

    if (array.length > 1) {
        index = partition(array, left, right);
        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }
        if (index < right) {
            quickSort(array, index, right);
        }
    }

    return array;
}

const partition = (array: Array<number>, left: number = 0, right: number = array.length - 1) => {
    const pivot = array[Math.floor((right + left) / 2)];

    let i = left;
    let j = right;

    while (i <=j) {
        // find item from left side to swap
        while (array[i] < pivot) {
            i++;
        } 
        // find item from right side to swap
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            j--;
        }
    }
    return i;
}
