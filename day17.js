'use strict';
/*
Number of Islands
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1

Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
  if (grid === 0 || grid.length === 0 || grid[0].length === 0) return 0;

  let height = grid.length;
  let width = grid[0].length;
  let count = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === 1) {
        count++;
        merge(grid, i, j);
      }
    }
  }

  return count;
};

var merge = function (grid, i, j) {
  let height = grid.length;
  let width = grid[0].length;

  if (i < 0 || i >= height || j < 0 || j >= width || grid[i][j] != 1)
    return;

  grid[i][j] = 'X';

  merge(grid, i - 1, j);
  merge(grid, i + 1, j);
  merge(grid, i, j - 1);
  merge(grid, i, j + 1);
}

console.log(numIslands([
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
])); // 1
console.log(numIslands([
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
])); // 3