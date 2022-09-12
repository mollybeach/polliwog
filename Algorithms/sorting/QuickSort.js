// write a quick sort class algorithm in javascript
// Quick sort is a divide and conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.
// Always pick first element as pivot.
// Always pick last element as pivot (implemented below)
// Pick a random element as pivot.
// Pick median as pivot.
// The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.
class QuickSort {
    constructor(array) {
        this.array = array;
        this.quickSort(this.array, 0, this.array.length - 1);
    }
    quickSort(array, left, right) {
        if (left < right) {
            let pivot = this.partition(array, left, right);
            this.quickSort(array, left, pivot - 1);
            this.quickSort(array, pivot + 1, right);
        }
    }
    partition(array, left, right) {
        let pivot = array[right];
        let i = left - 1;
        for (let j = left; j < right; j++) {
            if (array[j] <= pivot) {
                i++;
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        let temp = array[i + 1];
        array[i + 1] = array[right];
        array[right] = temp;
        return i + 1;
    }
}
const _QuickSort = QuickSort;
export { _QuickSort as QuickSort };
