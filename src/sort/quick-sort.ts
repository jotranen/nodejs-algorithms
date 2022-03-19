export const quickSort = (array: Array<number>) : Array<number> => {

    if (array.length <= 1) {
        return array;
    }

    let leftArray: Array<number> = [];
    let rightArray: Array<number> = [];
    let newArray: Array<number> = [];

    const pivot = array.pop();

    for (let i = 0; i < array.length; i++) {
        if (array[i] <= pivot) {
            leftArray.push(array[i]);
        }
        else {
            rightArray.push(array[i]);
        }
    }

    return newArray.concat(quickSort(leftArray), pivot, quickSort(rightArray));
}
