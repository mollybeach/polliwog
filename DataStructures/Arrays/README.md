## Array Data Structure

# Description

An array is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key. An array is stored such that the position of each element can be computed from its index tuple by a mathematical formula. The simplest type of data structure is a linear array, also called one-dimensional array.

# Types of Arrays

1. Static Array : A static array is an array whose size is fixed at compile time. The size of a static array cannot be changed during runtime. Static arrays are allocated on the stack and are stored in contiguous memory locations. Static arrays are faster than dynamic arrays because they are stored in contiguous memory locations. Static arrays are slower than dynamic arrays because they are stored in contiguous memory locations. 

// array size 5 

const arr = new Array(5);

2. Dynamic Array: A dynamic array is an array whose size can be changed during runtime. Dynamic arrays are allocated on the heap and are stored in non-contiguous memory locations. Dynamic arrays are slower than static arrays because they are stored in non-contiguous memory locations. Dynamic arrays are faster than static arrays because they are stored in non-contiguous memory locations.

const arr = [];

# Array Operations

1. Insertion
2. Deletion
3. Traversal
4. Searching
5. Sorting

# Time Complexity

1. Insertion - O(n)
2. Deletion - O(n)
3. Traversal - O(n)
4. Searching - O(n)
5. Sorting - O(nlogn)
