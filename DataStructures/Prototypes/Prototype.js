  class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  class ListNodeExtension extends ListNode {
    constructor(val) {
      super(val);
    }

    lt(other) {
      return this.val < other.val;
    }
  }

  class Solution {
    mergeKLists(lists) {
      ListNode.prototype.lt = ListNodeExtension.prototype.lt; //why are we using prototype here? because we are extending the class
      
      const minHeap = [];
      for (const root of lists) {
        if (root !== null) {
          minHeap.push(root);
        }
      }

      const head = new ListNode(0);
      let tail = head;
      while (minHeap.length > 0) {
        tail.next = minHeap.shift();
        tail = tail.next;
        if (tail.next !== null) {
          minHeap.push(tail.next);
        }
      }

      return head.next;
    }
  }