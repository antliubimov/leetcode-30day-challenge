'use strict';
/*
Last Stone Weight
We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

Example 1:
Input: [2,7,4,1,8,1]
Output: 1
Explanation:
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

Note:
1 <= stones.length <= 30
1 <= stones[i] <= 1000

Hide Hint #1
Simulate the process. We can do it with a heap, or by sorting some list of stones every time we take a turn.
*/

/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function (stones) {
  // while (stones.length >= 2) {
  //   let [x, y] = (stones[0] <= stones[1]) ? [0, 1] : [1, 0];
  //   for (let i = 2, length = stones.length; i < length; i++) {
  //     if (stones[x] < stones[i]) {
  //       if (stones[y] < stones[i]) {
  //         x = y;
  //         y = i;
  //       } else {
  //         x = i;
  //       }
  //     }
  //   }
  //   if (stones[x] === stones[y]) {
  //     if (x < y) {
  //       stones.splice(y, 1);
  //       stones.splice(x, 1);
  //     } else {
  //       stones.splice(x, 1);
  //       stones.splice(y, 1);
  //     }
  //   } else {
  //     stones[y] -= stones[x];
  //     stones.splice(x, 1);
  //   }
  // }
  // if (stones.length === 0) return 0;
  // if (stones.length === 1) return stones[0];

  while (stones.length > 1) {
    let y = Math.max(...stones);
    stones.splice(stones.indexOf(y), 1);
    let x = Math.max(...stones);
    stones.splice(stones.indexOf(x), 1);
    if (x !== y) {
      stones.push(y - x);
    }
  }
  return Number(stones);
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1, 1]));