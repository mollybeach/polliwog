
// import uisng require
//const { Heap } = require('./heap.js');
import { Heap } from './heap.js';
// create new heap
// write compare function
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

// howto create new project with package.json
// npm init -y

// to make it a module put "type": "module" in package.json
// make it so i can access heap from test.js
// import { Heap } from './Heap.js';
