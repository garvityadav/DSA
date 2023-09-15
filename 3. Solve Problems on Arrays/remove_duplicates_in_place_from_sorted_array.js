const makeUnique = (arr, n) => {
  let temp = arr[0];
  let index = 1;

  for (let i = 0; i < n; i++) {
    if (temp !== arr[i]) {
      arr[index] = arr[i];
      temp = arr[i];
      index++;
    }
  }
  return `array = ${arr},unique elements= ${index}`;
};

//Time complexity = O(n) worst case
//Space complexity = O(1)

console.log(makeUnique([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4], 11));
