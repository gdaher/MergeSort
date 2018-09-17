function split(arr) {
    let oddRemainder = null;
    if(arr.length % 2 !== 0) {
        oddRemainder = arr[arr.length - 1];
        arr = arr.slice(0,arr.length - 1);
    }
    let midIdx = (arr.length) / 2;
    let arr1 = arr.slice(0,midIdx);
    let arr2 = arr.slice(midIdx);

    return [arr1, arr2];
}