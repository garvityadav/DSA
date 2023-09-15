const isSorted = (arr, n, filter) => {
  if (
    filter.toLowerCase() === "acending" ||
    filter.toLowerCase() === "non-increasing"
  ) {
    for (let i of arr) {
      if (arr[n - 1] >= [i]) {
        return true;
      } else return false;
    }
  } else if (
    filter.toLowerCase() === "decending" ||
    filter.toLowerCase() === "non-decreasing"
  ) {
    for (let i of arr) {
      if (arr[n - 1] <= [i]) {
        return true;
      } else return false;
    }
  } else {
    return "incorrect arguments";
  }
};

//Time complexity O(n)
//Space complexity O(1)

console.log(isSorted([100, 0, 0, 0, 0, 0], 6, "decending"));
