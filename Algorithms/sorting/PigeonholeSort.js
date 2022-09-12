// write a Pigeonhole Sort class algorithm in javascript
// Pigeonhole sorting is a sorting algorithm that is suitable for sorting lists of elements where the number of elements (n) and the length of the range of possible key values (N) are approximately the same. It requires O(n + N) time. It is similar to counting sort, but differs in that it "moves items twice: once to the bucket array and again to the final destination." This algorithm is suitable for CPU and GPU implementations.
//
class PigeonholeSort {
    constructor(array) {
        this.array = array;
        this.pigeonholeSort(this.array);
    }
    pigeonholeSort(array) {
        let min = Math.min(...array);
        let max = Math.max(...array);
        let range = max - min + 1;
        let holes = new Array(range).fill(0);
        for (let i = 0; i < array.length; i++) {
            holes[array[i] - min]++;
        }
        let i = 0;
        for (let count = 0; count < range; count++) {
            while (holes[count]-- > 0) {
                array[i++] = count + min;
            }
        }
        return array;
    }
}
const _PigeonholeSort = PigeonholeSort;
export { _PigeonholeSort as PigeonholeSort };