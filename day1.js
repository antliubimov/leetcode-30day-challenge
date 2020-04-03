'use strict';
/* Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let sortNums = nums.sort((a, b) => a - b);
  for (let i = 0, length = nums.length; i < length; i += 1) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    } else {
      i = i + 1;
    }
  }
};

const a = [1, 2, 1, 2, 4, 3, 5, 5, 3];
// console.log(singleNumber(a));
// console.log(singleNumber([2, 2, 1]));
// console.log(singleNumber([4, 1, 2, 1, 2]));