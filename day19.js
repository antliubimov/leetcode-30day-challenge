'use strict';
/*
Search in Rotated Sorted Array
Solution
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  //return nums.indexOf(target);
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) {
      return middle;
    }
    if (nums[start] <= nums[middle]) {
      if (nums[start] <= target && nums[middle] > target) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    } else {
      if (nums[middle] < target && nums[end] >= target) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1