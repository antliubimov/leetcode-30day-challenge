'use strict';
/*
Binary Tree Maximum Path Sum
Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxPathSum = function (root) {
   let max = -Infinity;

   function dfs(node) {
      if (!node) {
         return -Infinity
      }

      //call recursiverly dfs on left and right.
      let leftSum = dfs(node.left);
      let rightSum = dfs(node.right);
      //find max of all the possible cases at that particular nodes.
      let current = Math.max(node.val, (node.val + leftSum), (node.val + rightSum), (node.val + rightSum + leftSum));
      //update max
      max = Math.max(current, max);

      // return path that parent should take to maximize sum.
      return node.val + Math.max(leftSum, rightSum, 0);
   }
   dfs(root);
   return max;
};
*/