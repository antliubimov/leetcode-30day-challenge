'use strict';
/* Move Zeroes

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations. */

/* Hide Hint #1
In-place means we should not be allocating any space for extra array. But we are allowed to modify the existing array. However, as a first step, try coming up with a solution that makes use of additional space. For this problem as well, first apply the idea discussed using an additional array and the in-place solution will pop up eventually.
   Hide Hint #2
A two-pointer approach could be helpful here. The idea would be to have one pointer for iterating the array and another pointer that just works on the non-zero elements of the array. */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.indexOf(0) === -1) return nums;
  // for (let i = 0, length = nums.length; i < length; i += 1) {
  //   if (nums[i] === 0) {
  //     let j = i + 1;
  //     if (j === length - 1) {
  //       return nums;
  //     }
  //     while (nums[j] === 0) {
  //       j += 1;
  //     }
  //     [nums[i], nums[j]] = [nums[j], nums[i]];
  //   }
  // }

  // let j = 0;
  // let length = nums.length;
  // if (length === 1) return nums;
  // if (nums.indexOf(0) === -1) return nums;

  // while (j !== length - 1) {
  //   let i = nums.indexOf(0);

  //   if (i !== length - 1) {
  //     j = i + 1;
  //   } else {
  //     return nums;
  //   }

  //   while (nums[j] === 0 && j < length - 1) {
  //     j += 1;
  //   }
  //   [nums[i], nums[j]] = [nums[j], nums[i]];
  // }
  // return nums;

  let nonZeroLastPos = 0;
  for (let i = 0, length = nums.length; i < length; i++) {
    if (nums[i] !== 0) {
      [nums[nonZeroLastPos], nums[i]] = [nums[i], nums[nonZeroLastPos]];
      nonZeroLastPos++;
    }
  }
  return nums;
};

//console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([4, 2, 4, 0, 0, 3, 0, 5, 1, 0]));
//console.log(moveZeroes([0]));