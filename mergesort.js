function split(arr) {
    let oddRemainder = null;
    if(arr.length % 2 !== 0) {
        oddRemainder = arr[arr.length - 1];
        arr = arr.slice(0,arr.length - 1);
    }
    let midIdx = (arr.length) / 2;
    let arr1 = arr.slice(0,midIdx);
    let arr2 = arr.slice(midIdx);

    if (!oddRemainder) {
      return [arr1, arr2];
    } else {
      return [arr1, arr2, oddRemainder];
    }
}

function mergeArr (arrInput1, arrInput2) {
  let resultArr = [];
  while (arrInput1.length > 0 && arrInput2.length > 0) {
    if (arrInput1[0] < arrInput2[0]) {
      resultArr.push(arrInput1.shift());
    } else if (arrInput1[0] === arrInput2[0]) {
      resultArr.push(arrInput1.shift(), arrInput2.shift());
    } else {
      resultArr.push(arrInput2.shift());
    }
  }
  if (arrInput1.length > 0) {
    resultArr = resultArr.concat(arrInput1);
  } else if (arrInput2.length > 0) {
    resultArr = resultArr.concat(arrInput2);
  }
  return resultArr;
}
