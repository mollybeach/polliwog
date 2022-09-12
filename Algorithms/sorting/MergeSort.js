// write a merge sort class algorithm in javascript
// Merge sort is a divide and conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.
// Merge sort is a divide and conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.

class MergeSort {
    constructor(array) {
        this.array = array;
        this.mergeSort(this.array);
    }
    mergeSort(array) {
        if (array.length <= 1) {
            return array;
        }
        let middle = Math.floor(array.length / 2);
        let left = array.slice(0, middle);
        let right = array.slice(middle);
        return this.merge(this.mergeSort(left), this.mergeSort(right));
    }
    merge(left, right) {
        let result = [];
        let indexLeft = 0;
        let indexRight = 0;
        while (indexLeft < left.length && indexRight < right.length) {
            if (left[indexLeft] < right[indexRight]) {
                result.push(left[indexLeft]);
                indexLeft++;
            }
            else {
                result.push(right[indexRight]);
                indexRight++;
            }
        }
        return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
    }
}

const _MergeSort = MergeSort;
export { _MergeSort as MergeSort };