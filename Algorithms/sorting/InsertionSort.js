// write an insertion sort algorithm in javascript
// Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
// Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.
// The choice of which element to remove from the input is arbitrary, and can be made using almost any choice algorithm. Although the algorithm is simple, most of the other sorting algorithms are more efficient for large lists.
// Insertion sort is stable: it does not change the relative order of elements with equal keys. It is in-place, requiring small additional amounts of memory to perform the sorting. It is adaptive, in that it only takes O(n) time if the input is already sorted.
// Insertion sort is used when number of elements is small. It can also be useful when input array is almost sorted, only few elements are misplaced in complete big array.
// Insertion sort is similar to selection sort, but it always places the selected element at the correct position in the sorted subarray. It is also similar to bubble sort, but it only swaps elements when it is necessary.
// Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.


class InsertionSort {
    constructor(array) {
        this.array = array;
        this.insertionSort(this.array);
    }
    insertionSort(array) {
        for (let i = 0; i < array.length; i++) {
            let key = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j = j - 1;
            }
            array[j + 1] = key;
        }
        return array;
    }
}
const _InsertionSort = InsertionSort;
export { _InsertionSort as InsertionSort };