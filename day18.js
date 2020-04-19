'use strict';
/*
Minimum Path Sum
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function (grid) {
  if (grid === null || grid.length === 0) {
    return 0;
  }

  let depth = grid.length;
  let width = grid[0].length;

  let dp = [];
  for (let i = 0; i < depth; i++) {
    dp.push([]);
  }

  dp[0][0] = grid[0][0];


  // top row
  for (let i = 1; i < width; i++) {
    dp[0][i] = dp[0][i-1] + grid[0][i];
  }
  // left column
  for (let j = 1; j < depth; j++) {
    dp[j][0] = dp[j-1][0] + grid[j][0];
  }
  // full dp
  for (let i = 1; i < depth; i++) {
    for (let j = 1; j < width; j++) {
      if (dp[i-1][j] > dp[i][j-1]) {
        dp[i][j] = dp[i][j-1] + grid[i][j];
      } else {
        dp[i][j] = dp[i-1][j] + grid[i][j];
      }
    }
  }

  return dp[depth-1][width-1];
};

console.log(minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]));