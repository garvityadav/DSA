/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const n = nums.length;
  let xor = 0;
  for (let i = 0; i < n; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(`the answer ${singleNumber([2, 2, 1])}`);
