const bubbleSort = (arr, n) => {
  //base case
  if (n == 1) {
    return arr;
  }
  let checkSwap = 0;
  for (let j = 0; j < n - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      checkSwap = 1;
      let temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  }
  console.log(checkSwap);
  if (checkSwap == 0) {
    return arr;
  }

  bubbleSort(arr, n - 1);

  return arr;
};

// const arr = [13, 46, 24, 52, 20, 9]; // worst case
// const arr = [9, 13, 20, 24, 46, 52]; // best case
const arr = [9]; // if only one element
const n = 1;
console.log(bubbleSort(arr, n));
