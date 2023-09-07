// Example 1:
// Input: N = 123
// Output: 321
// Explanation: The reverse of 123 is 321

// we can use while loop to devide the number by 10 and get the units digit and then inverse it

const reverseNumber = () => {
  let N = 1234472131556571;
  const num = N;
  let reverse = 0;

  while (N != 0) {
    let digit = Math.floor(N % 10);
    reverse = Math.floor(reverse * 10 + digit);
    N = Math.floor(N / 10);
  }
  console.log(reverse);
};

reverseNumber();
