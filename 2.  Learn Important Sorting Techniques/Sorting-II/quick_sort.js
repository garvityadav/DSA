const quickSort = (arr, low, high) => {
  if (low < high) {
    const pIndex = partition(arr, low, high);

    quickSort(arr, low, pIndex - 1); // left arr
    quickSort(arr, pIndex + 1, high); //right arr
  }
  return arr;
};

const partition = (arr, low, high) => {
  let i = low;
  let pivot = arr[low];
  let j = high;
  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }
    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }
    if (i < j) {
      swap(arr, i, j);
    }
  }
  swap(arr, low, j);
  return arr.indexOf(arr[j]);
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};

const arr = [4, 1, 7, 9, 3];
const low = 0;
const high = 4;
console.log(quickSort(arr, low, high));
