import { Heap } from './Heap';

 class PriorityQueue {

   constructor(compare, _values) {
     if (typeof compare !== 'function') {
       throw new Error('PriorityQueue constructor expects a compare function');
     }
     this._heap = new Heap(compare, _values);
     if (_values) {
       this._heap.fix();
     }
   }
   front() {
     return this._heap.root();
   }                                                            // returns an element with highest priority in the queue
   back() {
     return this._heap.leaf();
   }                                                            //returns an element with lowest priority in the queue
   enqueue(value) {
     return this._heap.insert(value);
   }                                                            //adds a value to the queue
   push(value) {
     return this.enqueue(value);
   }                                                            //adds a value to the queue     
   dequeue() {
     return this._heap.extractRoot();
   }                                                            //removes and returns an element with highest priority in the queue
   pop() {
     return this.dequeue();
   }                                                            // removes and returns an element with highest priority in the queue
   size() {
     return this._heap.size();
   }                                                            //returns the number of elements in the queue
   isEmpty() {
     return this._heap.isEmpty();
   }                                                            // returns true if the queue is empty
   clear() {
     this._heap.clear();
   }                                                            //clears the queue
   toArray() {
     return this._heap.clone().sort().reverse();
   }                                                            // returns a sorted list of elements from highest to lowest priority
   static fromArray(values, compare) {
     return new PriorityQueue(compare, values);
   }                                                                // creates a priority queue from an existing array
 }
 
 exports.PriorityQueue = PriorityQueue;