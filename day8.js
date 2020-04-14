'use strict';
/*
Middle of the Linked List
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

Example 1:
Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.

Example 2:
Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.

Note:
The number of nodes in the given list will be between 1 and 100.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function (head) {
  let length = listLength(head);
  let middle = (length % 2 === 0) ? length / 2 + 1 : Math.ceil(length / 2);
  let res = head;

  while (middle !== 1) {
    res = res.next;
    middle--;
  }

  return res;
};

var listLength = (val) => {
  let length = 1;
  while (val.next !== null) {
    val = val.next;
    length++;
  }
  return length;
};

let listNode1 = {
  head: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

let listNode2 = {
  head: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: null
          }
        }
      }
    }
  }
}

let listNode3 = {
  head: 1,
  next: null
}

console.log(middleNode(listNode1));
console.log(middleNode(listNode2));
console.log(middleNode(listNode3));