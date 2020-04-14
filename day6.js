'use strict';
/* Group Anagrams
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 0) return strs;
  if (strs.length === 1) return [strs];
  //   let result = [
  //     [strs[0]]
  //   ];
  // for (let i = 1, length = strs.length; i < length; i++) {
  //   for (let j = 0; j < result.length; j++) {
  //     if (isAnagram(strs[i], result[j][0])) {
  //       result[j].push(strs[i]);
  //       break;
  //     } else if (j === result.length - 1) {
  //       result.push([strs[i]]);
  //       break;
  //     } else {
  //       continue;
  //     }
  //   }
  // }

  let result = {};
  for (let i = 0, length = strs.length; i < length; i++) {
    let str = strs[i];
    let sortStr = str.split('').sort().join('');
    if (result[sortStr]) {
      result[sortStr].push(str);
    } else {
      result[sortStr] = [str];
    }
  }
  return Object.values(result);
};

// var isAnagram = function (str1, str2) {
//   if (str1.length === str2.length) {
//     return str1.split('').sort().join('') === str2.split('').sort().join('');
//   } else {
//     return false;
//   }
// }

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));