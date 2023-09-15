const secondLargestAndSecondSmallest = (arr, n) => {
  let largest = arr[n - 1];
  let second_largest = arr[1];
  let smallest = arr[0];
  let second_smallest = arr[1];

  for (let i of arr) {
    if (i >= largest) {
      largest = i;
    } else if (i <= largest && i >= second_largest) {
      second_largest = i;
    }
    if (i <= smallest) {
      smallest = i;
    } else if (i >= smallest && i <= second_smallest) {
      second_smallest = i;
    }
  }

  return `sec largest: ${
    second_largest ? second_largest : -1
  }, second smallest : ${second_smallest ? second_smallest : -1}`;
};

console.log(secondLargestAndSecondSmallest([1, 2, 4, 7, 7, 5], 6));
