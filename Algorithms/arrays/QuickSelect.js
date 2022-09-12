// Write the QuickSelect algorithm in javascript
// QuickSelect is a selection algorithm to find the kth smallest element in an unordered list. It is related to the quick sort sorting algorithm.
// It is also a randomized algorithm, like quick sort, and has an expected time complexity of O(n), with a worst case of O(n^2).
// The selection algorithm is useful for finding the median of a list of numbers in linear time.
// The algorithm is based on the idea of quick sort, where we pick a pivot element, then partition the array, and then recursively call the algorithm on the subarray where the pivot element lies.
// The only difference is that instead of recursing for both sides, we recurse for one side according to the position of the pivot element.
// If the pivot element is at its correct position, then we return the pivot element.
// If the pivot element is more than its correct position, then we recur for the left subarray.
// If the pivot element is less than its correct position, then we recur for the right subarray.
// what kind of algorithm is this? (sorting, searching, graph, math, etc)

class QuickSelect {
    constructor() {
        this.pivot = 0;
        this.left = 0;
        this.right = 0;
    }
    findKthSmallest(array, k) {
        this.left = 0;
        this.right = array.length - 1;
        while (this.left <= this.right) {
            this.pivot = this.partition(array, this.left, this.right);
            if (this.pivot == k - 1) {
                return array[this.pivot];
            } else if (this.pivot > k - 1) {
                this.right = this.pivot - 1;
            } else {
                this.left = this.pivot + 1;
            }
        }
        return -1;
    }
    partition(array, left, right) {
        let pivot = array[right];
        let i = left;
        for (let j = left; j < right; j++) {
            if (array[j] < pivot) {
                this.swap(array, i, j);
                i++;
            }
        }
        this.swap(array, i, right);
        return i;
    }
    swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const _QuickSelect = QuickSelect;
export { _QuickSelect as QuickSelect };