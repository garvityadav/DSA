const zeroToLeft = (arr, n) => {
  let j = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) {
      j = i;
      break;
    }
  }
  if (j == -1) {
    return arr;
  }
  for (let i = j + 1; i < n; i++) {
    if (arr[i] != 0) {
      swap(arr, j, i);
      j++;
    }
  }
  return arr;
};
const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
};

console.log(zeroToLeft([0, 0, 1], 3));
