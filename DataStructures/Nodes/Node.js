/*class Node {
    constructor(val, priority) {
      this.val = val;
      this.priority = priority ? priority : null;
    }
  }*/
  class Node {
    constructor(data, frequency, left, right) {
        this.data = data;
        this.frequency = frequency;
        this.left = left;
        this.right = right;
    }
}

const _Node = Node;
export { _Node as Node };



