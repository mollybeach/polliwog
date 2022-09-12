// write a Cycle Sort class algorithm in javascript
// Cycle sort is an in-place, unstable sorting algorithm, a comparison sort that is theoretically optimal in terms of the total number of writes to the original array, unlike any other in-place sorting algorithm. It is optimal in terms of number of memory writes. It is based on the idea that the permutation to be sorted can be factored into cycles, which can individually be rotated to give a sorted result.

class CycleSort {
    constructor(array) {
        this.array = array;
        this.cycleSort(this.array);
    }
    cycleSort(array) {
        let writes = 0;
        for (let cycleStart = 0; cycleStart <= array.length - 2; cycleStart++) {
            let item = array[cycleStart];
            let pos = cycleStart;
            for (let i = cycleStart + 1; i < array.length; i++) {
                if (array[i] < item) {
                    pos++;
                }
            }
            if (pos === cycleStart) {
                continue;
            }
            while (item === array[pos]) {
                pos += 1;
            }
            if (pos !== cycleStart) {
                let temp = item;
                item = array[pos];
                array[pos] = temp;
                writes++;
            }
            while (pos !== cycleStart) {
                pos = cycleStart;
                for (let i = cycleStart + 1; i < array.length; i++) {
                    if (array[i] < item) {
                        pos += 1;
                    }
                }
                while (item === array[pos]) {
                    pos += 1;
                }
                if (item !== array[pos]) {
                    let temp = item;
                    item = array[pos];
                    array[pos] = temp;
                    writes++;
                }
            }
        }
        return array;
    }
}
const _CycleSort = CycleSort;
export { _CycleSort as CycleSort };