const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  first = null;
  last = null;

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (this.first === null) {
      this.first = node;
    } else {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    const node = this.first;
    if (node === null) return null;
    const value = node.value;
    this.first = node.next;
    if (node === this.last) {
      this.last = null;
    }
    return value;
  }
}

module.exports = {
  Queue
};
