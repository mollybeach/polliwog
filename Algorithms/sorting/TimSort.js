// write a Tim Sort class algorithm in javascript
// TimSort is a sorting algorithm based on Insertion Sort and Merge Sort. It is a stable sorting algorithm that requires O(n log n) time. It is used in Java’s Arrays.sort() as well as Python’s sorted() and sort().
//
class TimSort {
    constructor(array) {
        this.array = array;
        this.timSort(this.array);
    }
    timSort(array) {
        let minRun = this.minRunLength(array.length);
        for (let i = 0; i < array.length; i += minRun) {
            this.insertionSort(array, i, Math.min(i + minRun - 1, array.length - 1));
        }
        for (let size = minRun; size < array.length; size = 2 * size) {
            for (let left = 0; left < array.length; left += 2 * size) {
                let mid = left + size - 1;
                let right = Math.min(left + 2 * size - 1, array.length - 1);
                this.merge(array, left, mid, right);
            }
        }
        return array;
    }
    insertionSort(array, left, right) {
        for (let i = left + 1; i <= right; i++) {
            let temp = array[i];
            let j = i - 1;
            while (j >= left && array[j] > temp) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = temp;
        }
    }
    merge(array, left, mid, right) {
        let len1 = mid - left + 1;
        let len2 = right - mid;
        let leftArray = new Array(len1);
        let rightArray = new Array(len2);
        for (let x = 0; x < len1; x++) {
            leftArray[x] = array[left + x];
        }
        for (let x = 0; x < len2; x++) {
            rightArray[x] = array[mid + 1 + x];
        }
        let i = 0;
        let j = 0;
        let k = left;
        while (i < len1 && j < len2) {
            if (leftArray[i] <= rightArray[j]) {
                array[k] = leftArray[i];
                i++;
            } else {
                array[k] = rightArray[j];
                j++;
            }
            k++;
        }
        while (i < len1) {
            array[k] = leftArray[i];
            k++;
            i++;

        }
        while (j < len2) {
            array[k] = rightArray[j];
            k++;
            j++;
        }
    }
    minRunLength(n) {
        let r = 0;
        while (n >= 64) {
            r |= n & 1;
            n >>= 1;
        }
        return n + r;
    }
}
const _TimSort = TimSort;
export { _TimSort as TimSort };