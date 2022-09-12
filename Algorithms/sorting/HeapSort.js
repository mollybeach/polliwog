// write a Heap Sort class algorithm in javascript
// Heap sort is a comparison-based sorting algorithm. Heapsort can be thought of as an improved selection sort: like that algorithm, it divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element and moving that to the sorted region. The improvement consists of the use of a heap data structure rather than a linear-time search to find the maximum.
// Heapsort is an in-place algorithm, but it is not a stable sort.
// Heapsort can be thought of as an improved selection sort: like that algorithm, it divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element and moving that to the sorted region. The improvement consists of the use of a heap data structure rather than a linear-time search to find the maximum.
// Heapsort is an in-place algorithm, but it is not a stable sort.

class HeapSort {
    constructor(array) {
        this.array = array;
        this.heapSort(this.array);
    }
    heapSort(array) {
        let n = array.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            this.heapify(array, n, i);
        }
        for (let i = n - 1; i >= 0; i--) {
            let temp = array[0];
            array[0] = array[i];
            array[i] = temp;
            this.heapify(array, i, 0);
        }
        return array;
    }
    heapify(array, n, i) {
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        if (l < n && array[l] > array[largest]) {
            largest = l;
        }
        if (r < n && array[r] > array[largest]) {
            largest = r;
        }
        if (largest != i) {
            let swap = array[i];
            array[i] = array[largest];
            array[largest] = swap;
            this.heapify(array, n, largest);
        }
    }
}

const _HeapSort = HeapSort;
export { _HeapSort as HeapSort };
