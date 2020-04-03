'use strict';
/* Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

  /* let result = nums[0];
  for (let i = 0, length = nums.length; i < length; i += 1) {
    let tmpSum = nums[i];

    for (let j = i + 1; j <= length; j += 1) {
      if (tmpSum > result) {
        result = tmpSum;
      }
      if (j < length) {
        tmpSum += nums[j];
      }
    }

  }
  return result; */

  let maxSum = nums[0];
  let partialSum = 0;

  for (let item of nums) { // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }

  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([-1, 2, 3, -9])) //= 5 (сумма выделенных)
console.log(maxSubArray([2, -1, 2, 3, -9])) //= 6
console.log(maxSubArray([-1, 2, 3, -9, 11])) //= 11
console.log(maxSubArray([-2, -1, 1, 2])) //= 3
console.log(maxSubArray([100, -9, 2, -3, 5])) //= 100
console.log(maxSubArray([1, 2, 3])) //= 6 (берём все)