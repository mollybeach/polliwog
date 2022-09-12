// write a Shell Sort class algorithm in javascript
// Shell sort is a highly efficient sorting algorithm and is based on insertion sort algorithm. This algorithm avoids large shifts as in case of insertion sort, if the smaller value is to the far right and has to be moved to the far left.
// This algorithm uses insertion sort on a widely spread elements, first to sort them and then sorts the less widely spaced elements. This spacing is termed as interval.
//
class ShellSort {
    constructor(array) {
        this.array = array;
        this.shellSort(this.array);
    }
    shellSort(array) {
        let n = array.length;
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                let temp = array[i];
                let j;
                for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                    array[j] = array[j - gap];
                }
                array[j] = temp;
            }
        }
        return array;
    }
}
const _ShellSort = ShellSort;
export { _ShellSort as ShellSort };