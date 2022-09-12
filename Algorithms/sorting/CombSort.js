// write a Comb Sort class algorithm in javascript
// Comb sort is an improvement over bubble sort. Bubble sort always compares adjacent values. So all inversions are removed one by one. Comb sort improves on bubble sort by using gap of size more than 1. The gap starts with a large value and shrinks by a factor of 1.3 in every iteration until it reaches the value 1. Thus Comb sort removes more than one inversion counts with one swap and performs better than Bubble sort.
//
class CombSort {
    constructor(array) {
        this.array = array;
        this.combSort(this.array);
    }
    combSort(array) {
        let n = array.length;
        let gap = n;
        let swapped = true;
        while (gap != 1 || swapped == true) {
            gap = Math.floor(gap / 1.3);
            if (gap < 1) {
                gap = 1;
            }
            swapped = false;
            for (let i = 0; i < n - gap; i++) {
                if (array[i] > array[i + gap]) {
                    let temp = array[i];
                    array[i] = array[i + gap];
                    array[i + gap] = temp;
                    swapped = true;
                }
            }
        }
        return array;
    }
}
const _CombSort = CombSort;
export { _CombSort as CombSort };