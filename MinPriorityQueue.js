
import { Heap } from './Heap.js';
import { MinHeap} from './MinHeap.js';

const getMinCompare = (getCompareValue) => (a, b) => {
   const aVal = typeof getCompareValue === 'function' ? getCompareValue(a) : a;
   const bVal = typeof getCompareValue === 'function' ? getCompareValue(b) : b;
   return aVal < bVal ? -1 : 1;
 };
 
class MinPriorityQueue {
   constructor(getCompareValue, _heap) {
     if (getCompareValue && typeof getCompareValue !== 'function') {
       throw new Error('MinPriorityQueue constructor requires a callback for object values');
     }
     this._heap = _heap || new MinHeap(getCompareValue);
   }
   front() { 
     return this._heap.root();
   }                                        // returns an element with highest priority in the queue
   back() {                                
     return this._heap.leaf();
   }                                        //returns an element with lowest priority in the queue
   enqueue(value) {
     return this._heap.insert(value);
   }                                        //adds a value to the queue
   push(value) {
     return this.enqueue(value);
   }                                        //adds a value to the queue
   dequeue() {
     return this._heap.extractRoot();
   }                                        //removes and returns an element with highest priority in the queue
   pop() {          
     return this.dequeue();         
   }                                        // removes and returns an element with highest priority in the queue
   size() {         
     return this._heap.size();          
   }                                        //returns the number of elements in the queue
    isEmpty() {         
     return this._heap.isEmpty();           
   }                                        // returns true if the queue is empty
    clear() {           
     this._heap.clear();
   }                                        //clears the queue
   toArray() {
     return this._heap.clone().sort().reverse();
   }                                        // returns a sorted list of elements from highest to lowest priority
   static fromArray(values, getCompareValue) {
     const heap = new Heap(getMinCompare(getCompareValue), values);
     return new MinPriorityQueue(
       getCompareValue,
       new MinHeap(getCompareValue, heap).fix()
     );
   }                                          // creates a priority queue from an existing array
 }
 const _MinPriorityQueue = MinPriorityQueue;
 export { _MinPriorityQueue as MinPriorityQueue };