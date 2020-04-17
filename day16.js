'use strict';
/*
Valid Parenthesis String
Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.

Example 1:
Input: "()"
Output: True

Example 2:
Input: "(*)"
Output: True

Example 3:
Input: "(*))"
Output: True

Note:
The string size will be in the range [1, 100].
*/

/**
 * @param {string} s
 * @return {boolean}
 */

var checkValidString = function (s) {
  let minLeft = 0;
  let maxLeft = 0;

  for (let i = 0, length = s.length; i < length; i++) {
    minLeft += (s[i] === '(') ? 1 : -1;
    maxLeft += (s[i] !== ')') ? 1 : -1;
    if (maxLeft < 0) return false;
    minLeft = Math.max(0, minLeft);
  }

  return minLeft == 0;
};

console.log(checkValidString("(**)))"));