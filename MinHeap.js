import { Heap } from "./Heap.js";

 const getMinCompare = (getCompareValue) => (a, b) => {
   const aVal = typeof getCompareValue === 'function' ? getCompareValue(a) : a;
   const bVal = typeof getCompareValue === 'function' ? getCompareValue(b) : b;
   return aVal < bVal ? -1 : 1;
 };
 
 class MinHeap {
   constructor(getCompareValue, _heap) {
     this._getCompareValue = getCompareValue;
     this._heap = _heap || new Heap(getMinCompare(getCompareValue));
   }
   insert(value) {
    return this._heap.insert(value);
    }                                                    //inserts a new value into the heap
    push(value) {
      return this.insert(value);
    }                                                    //inserts a new value into the heap
    extractRoot() {
      return this._heap.extractRoot();
    }                                                    //removes and returns the root node in the heap
    pop() {
        return this.extractRoot();
    }                                                    //removes and returns the root node in the heap
    sort() {
      return this._heap.sort();
    }                                                    //applies heap sort and return the values sorted by priority
    fix() {
      return this._heap.fix();
    }                                                    //fixes node positions in the heap
    isValid() {
      return this._heap.isValid();
    }                                                    //verifies that all heap nodes are in the right position
    root() {
      return this._heap.root();
    }                                                    //returns the root node in the heap
    top() {
      return this.root();
    }                                                    //returns the root node in the heap
    leaf() {
      return this._heap.leaf();
    }                                                    //returns a leaf node in the heap
    size() {
      return this._heap.size();
    }                                                    //returns the number of nodes in the heap
    isEmpty() {
     return this._heap.isEmpty();
    }                                                    //checks if the heap is empty
    clear() {
      this._heap.clear();
    }                                                    //clears the heap
    clone() {
      return new MaxHeap(this._getCompareValue, this._heap.clone());
    }
   static heapify(values, getCompareValue) {
     if (!Array.isArray(values)) {
       throw new Error('MinHeap.heapify expects an array');
     }
     const heap = new Heap(getMinCompare(getCompareValue), values);
     return new MinHeap(getCompareValue, heap).fix();
   }                                                        //builds a MinHeap from an array
   static isHeapified(values, getCompareValue) {
     const heap = new Heap(getMinCompare(getCompareValue), values);
     return new MinHeap(getCompareValue, heap).isValid();
   }                                                            //checks if a list of values is a valid min heap
 }
 
 const _MinHeap = MinHeap;
 export { _MinHeap as MinHeap };