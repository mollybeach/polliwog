

import { Heap } from './Heaps/Heap.js';
import { MinHeap} from './Heaps/MinHeap.js';
/*

import { MaxHeap } from './Heaps/MaxHeap.js';
import { PriorityQueue } from './Queues/PriorityQueue.js';
import { MinPriorityQueue } from './Queues/MinPriorityQueue.js';
import { MaxPriorityQueue } from './Queues/MaxPriorityQueue.js';
*/
const getMinCompare = (getCompareValue) => (a, b) => {
    const aVal = typeof getCompareValue === 'function' ? getCompareValue(a) : a;
    const bVal = typeof getCompareValue === 'function' ? getCompareValue(b) : b;
    return aVal < bVal ? -1 : 1;
};

const heap = new Heap(getMinCompare());

// insert values into heap
heap.insert(1);
heap.insert(2);
heap.insert(3);

console.log(heap.hasLeftChild(2)); // true
console.log(heap.root()); // 1
console.log(heap.extractRoot()); // 1
console.log(heap.nodes); // [2, 3]

// create a min heap
const minHeap = new MinHeap();
minHeap.insert(4);
minHeap.insert(5);
minHeap.insert(6);

console.log(minHeap.root()); // 1


