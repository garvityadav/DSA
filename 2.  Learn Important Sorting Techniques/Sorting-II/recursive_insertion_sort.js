const insertionSort = (arr, n, i = 0) => {
  //base case
  if (i >= n) {
    return arr;
  }

  let j = i;

  while (j > 0 && arr[j - 1] > arr[j]) {
    let temp = arr[j - 1];
    arr[j - 1] = arr[j];
    arr[j] = temp;
    j--;
  }

  insertionSort(arr, n, i + 1);

  return arr;
};

const arr = [13, 46, 24, 52, 20, 9]; // worst case
// const arr = [9, 13, 20, 24, 46, 52]; // best case
// const arr = [9]; // if only one element
const n = 6;
console.log(insertionSort(arr, n));
