
export const mergeSort = (arr: Array<number>) => {

    if (arr.length < 2) { 
        return arr; 
    }

    const middle = Math.floor(arr.length / 2);

    const arr_l = arr.slice(0, middle);
    const arr_r = arr.slice(middle, arr.length);

    const sorted_l = mergeSort(arr_l);
    const sorted_r = mergeSort(arr_r);

    return _merge(sorted_l, sorted_r);
}

const _merge = (a: Array<number>, b: Array<number>) => {
    const c: Array<number> = [];

    while (a.length && b.length) {
        c.push(a[0] > b[0] ? b.shift() : a.shift());
    }

    while (a.length) {
        c.push(a.shift());
    }

    while (b.length) {
        c.push(b.shift());
    }

    return c;
}