// write a radix sort class algorithm in javascript
// Radix sort is a non-comparative integer sorting algorithm that sorts data with integer keys by grouping keys by the individual digits which share the same significant position and value. A positional notation is required, but because integers can represent strings of characters (e.g., names or dates) and specially formatted floating point numbers, radix sort is not limited to integers.
//
class RadixSort {
    constructor(array) {
        this.array = array;
        this.radixSort(this.array);
    }
    radixSort(array) {
        let max = Math.max(...array);
        let exp = 1;
        while (max / exp > 0) {
            let output = new Array(array.length);
            let count = new Array(10).fill(0);
            for (let i = 0; i < array.length; i++) {
                count[Math.floor(array[i] / exp) % 10]++;
            }
            for (let i = 1; i < count.length; i++) {
                count[i] += count[i - 1];
            }
            for (let i = array.length - 1; i >= 0; i--) {
                output[count[Math.floor(array[i] / exp) % 10] - 1] = array[i];
                count[Math.floor(array[i] / exp) % 10]--;
            }
            for (let i = 0; i < array.length; i++) {
                array[i] = output[i];
            }
            exp *= 10;
        }
        return array;
    }
}
const _RadixSort = RadixSort;
export { _RadixSort as RadixSort };
