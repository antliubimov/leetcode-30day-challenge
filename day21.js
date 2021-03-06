'use strict';
/*
<<<<<<< HEAD

=======
>>>>>>> ed46ebbffb221fbeff0a56d04e94a28a2a36092b
Leftmost Column with at Least a One
(This problem is an interactive problem.)

A binary matrix means that all elements are 0 or 1. For each individual row of the matrix, this row is sorted in non-decreasing order.

Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) with at least a 1 in it. If such index doesn't exist, return -1.

You can't access the Binary Matrix directly.  You may only access the matrix using a BinaryMatrix interface:

BinaryMatrix.get(x, y) returns the element of the matrix at index (x, y) (0-indexed).
<<<<<<< HEAD
BinaryMatrix.dimensions() returns a list of 2 elements [n, m], which means the matrix is n * m.
=======
BinaryMatrix.dimensions() returns a list of 2 elements [m, n], which means the matrix is m * n.
>>>>>>> ed46ebbffb221fbeff0a56d04e94a28a2a36092b
Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.

For custom testing purposes you're given the binary matrix mat as input in the following four examples. You will not have access the binary matrix directly.

<<<<<<< HEAD

=======
>>>>>>> ed46ebbffb221fbeff0a56d04e94a28a2a36092b
Example 1:
Input: mat = [[0,0],[1,1]]
Output: 0

Example 2:
Input: mat = [[0,0],[0,1]]
Output: 1

Example 3:
Input: mat = [[0,0],[0,0]]
Output: -1

Example 4:
Input: mat = [[0,0,0,1],[0,0,1,1],[0,1,1,1]]
Output: 1

<<<<<<< HEAD
Constraints:

1 <= mat.length, mat[i].length <= 100
mat[i][j] is either 0 or 1.
mat[i] is sorted in a non-decreasing way.
=======

Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 100
mat[i][j] is either 0 or 1.
mat[i] is sorted in a non-decreasing way.

>>>>>>> ed46ebbffb221fbeff0a56d04e94a28a2a36092b
   Hide Hint #1
1. (Binary Search) For each row do a binary search to find the leftmost one on that row and update the answer.
   Hide Hint #2
2. (Optimal Approach) Imagine there is a pointer p(x, y) starting from top right corner. p can only move left or down. If the value at p is 0, move down. If the value at p is 1, move left. Try to figure out the correctness and time complexity of this algorithm.
*/

/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function (binaryMatrix) {
  let [rows, cols] = binaryMatrix.dimensions();

  if (rows == 0 && cols == 0) return -1;
  let result = -1;

  let r = 0;
  let c = cols - 1;

  while (r < rows && c >= 0) {
    if (binaryMatrix.get(r, c) == 1) {
      result = c;
      c--;
    } else {
      r++;
    }
  }

  return result;
};