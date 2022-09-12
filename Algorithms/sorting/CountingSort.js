// write a counting sort class algorithm in javascript
// Counting sort is a sorting technique based on keys between a specific range. It works by counting the number of objects having distinct key values (kind of hashing). Then doing some arithmetic to calculate the position of each object in the output sequence.
// Counting sort is efficient if the range of input data is not significantly greater than the number of objects to be sorted. Consider the situation where the input sequence is between range 1 to 10K and the data is 10, 5, 10K, 5K.
// It is not a comparison based sorting. It running time complexity is O(n) with space proportional to the range of data.
// It is often used as a sub-routine to another sorting algorithm like radix sort.
// Counting sort uses a partial hashing to count the occurrence of the data object in O(1).
// Counting sort can be extended to work for negative inputs also.
//
class CountingSort {
    constructor(array) {
        this.array = array;
        this.countingSort(this.array);
    }
    countingSort(array) {
        let max = Math.max(...array);
        let min = Math.min(...array);
        let range = max - min + 1;
        let count = new Array(range).fill(0);
        let output = new Array(array.length);
        for (let i = 0; i < array.length; i++) {
            count[array[i] - min]++;
        }
        for (let i = 1; i < count.length; i++) {
            count[i] += count[i - 1];
        }
        for (let i = array.length - 1; i >= 0; i--) {
            output[count[array[i] - min] - 1] = array[i];
            count[array[i] - min]--;
        }
        for (let i = 0; i < array.length; i++) {
            array[i] = output[i];
        }
        return array;
    }
}
const _CountingSort = CountingSort;
export { _CountingSort as CountingSort };
