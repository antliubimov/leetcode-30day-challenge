'use strict';
/* Min Stack
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.


Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.


Hint #1
Consider each node in the stack having a minimum value.  */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.min = Infinity;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  this.min = Math.min(x, this.min);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let x = this.stack.pop();
  if (x === this.min) {
    this.min = Math.min(...this.stack);
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};




var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
obj.getMin(); // --> Returns -3.
obj.pop();
obj.top(); // --> Returns 0.
obj.getMin(); // --> Returns -2.