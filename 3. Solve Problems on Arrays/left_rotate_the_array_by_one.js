const leftRotate = (arr, n) => {
  let temp = arr[0];
  for (let i = 0; i < n - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[n - 1] = temp;
  return arr;
};

//time complexity = O(n)
//space complexity = O(1)

console.log(leftRotate([1, 2, 3, 4, 5], 5));
