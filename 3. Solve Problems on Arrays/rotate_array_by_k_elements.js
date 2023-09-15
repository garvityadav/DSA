const reverse = (arr, start, end) => {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

const rotateArrayWithK = (arr, n, k, condition) => {
  if (condition.toLowerCase() === "right") {
    // reverse except the last k elements
    reverse(arr, 0, n - k - 1);

    //reverse the last k elements
    reverse(arr, n - k, n - 1);

    //reverse the array
    reverse(arr, 0, n - 1);

    return arr;
  } else if (condition.toLowerCase() === "left") {
    // reverse except the first k elements
    reverse(arr, k, n - 1);

    //reverse the first k elements
    reverse(arr, 0, k - 1);

    //reverse the array
    reverse(arr, 0, n - 1);

    return arr;
  } else return `Invalid condition , please select "left" or "right"`;
};

//Time complexity  = O(n)
//Space complexity = O(1)
console.log(rotateArrayWithK([1, 2, 3, 4, 5, 6, 7], 7, 2, "left"));
