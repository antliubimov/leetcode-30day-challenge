'use strict'
/*
Maximal Square
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */

var maximalSquare = function (matrix) {
  let max = 0;
  let rows = matrix.length;
  if (rows === 0) return 0;
  if (rows === 1) {
    return matrix[0].includes('1') ? 1 : 0;
  }
  let cols = matrix[0].length;
  let subMatrix = [];
  for (let i = 0; i < rows; i++) {
    subMatrix.push(new Array(cols).fill(0));

  }

  matrix[0].forEach((el, ind) => {
    subMatrix[0][ind] = Number(el);
    if (max < subMatrix[0][ind]) max = subMatrix[0][ind];
  });

  for (let i = 1; i < rows; i++) {
    subMatrix[i][0] = Number(matrix[i][0]);
    if (max < subMatrix[i][0]) max = subMatrix[i][0];
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === '1') {
        subMatrix[i][j] = Math.min(subMatrix[i][j - 1], subMatrix[i - 1][j], subMatrix[i - 1][j - 1]) + 1;
        if (max < subMatrix[i][j]) {
          max = subMatrix[i][j];
        }
      };
    }
  }

  return max ** 2;
};

/* console.log(maximalSquare([
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0']
]));
 */
//console.log(maximalSquare(['1']));

//

console.log(maximalSquare([
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "1"],
  ["0", "0", "0", "0", "0"]
]));