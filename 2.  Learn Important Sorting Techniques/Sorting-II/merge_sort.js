const arr = [1, 4, 1, 5, 2, 4, 2, 12, 11];

function mergeSort(arr, low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }
  return arr;
}

const merge = (arr, low, mid, high) => {
  const temp = [];
  let left = low;
  let right = mid + 1;
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    }
    if (arr[right] <= arr[left]) {
      temp.push(arr[right]);
      right++;
    }
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }

  return arr;
};

console.log(mergeSort(arr, 0, arr.length - 1));
