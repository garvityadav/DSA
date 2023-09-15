const largestElement = (arr) => {
  let largestNumber = 0;

  for (let i of arr) {
    if (i >= largestNumber) {
      largestNumber = i;
    }
  }
  return largestNumber;
};

console.log(largestElement([2, 5, 1, 3, 0]));
