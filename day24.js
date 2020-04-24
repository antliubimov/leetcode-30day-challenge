'use strict';
/*
LRU Cache
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 / capacity / );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this._hashTable = new Map();
  this._timeQueue = [];
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */

LRUCache.prototype.get = function (key) {
  if (this._hashTable.has(key)) {
    let index = this._timeQueue.indexOf(key);
    let elem = this._timeQueue.splice(index, 1);
    this._timeQueue.push(elem[0]);

    return this._hashTable.get(key);

  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */

LRUCache.prototype.put = function (key, value) {
  if (this._hashTable.has(key)) {
    this._hashTable.set(key, value);
    let index = this._timeQueue.indexOf(key);
    let elem = this._timeQueue.splice(index, 1)
    this._timeQueue.push(elem[0]);
  } else {
    if (this._hashTable.size === this.capacity) {
      let least = this._timeQueue.shift();
      this._hashTable.delete(least);
      this._hashTable.set(key, value);
      this._timeQueue.push(key);
    } else {
      this._hashTable.set(key, value);
      this._timeQueue.push(key);
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// ["LRUCache","put","put","get","put","get","put","get","get","get"]
// [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
// output [null,null,null,1,null,-1,null,-1,3,4]