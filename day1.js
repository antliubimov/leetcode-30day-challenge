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

/* Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example:

Input: 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let counter = 0;
  let sum = 0;
  while (sum !== 1) {
    let arr = n.toString().split('').map(el => el ** 2);
    let sum = arr.reduce((el, acc) => acc + el, 0)
    if (sum === 1) {
      return true;
    } else {
      n = sum;
    }
    counter++;
    if (counter === 8) return false;
  }
};

console.log(isHappy(19));