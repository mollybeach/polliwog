// The Kanade's algorithm is used to find the maximum subarray in an array
// The algorithm is based on the fact that the maximum subarray ending at the current element
// is either the current element or the current element plus the maximum subarray ending at the previous element
// it is a dynamic programming algorithm

class Kadanes {
    constructor() {
        this.max = 0;
        this.current = 0;
    }
    
    findMaxSubArray(array) {
        for (let i = 0; i < array.length; i++) {
        this.current = Math.max(0, this.current + array[i]);
        this.max = Math.max(this.max, this.current);
        }
        return this.max;
    }
    findMinSubArray(array) {
        for (let i = 0; i < array.length; i++) {
        this.current = Math.min(0, this.current + array[i]);
        this.max = Math.min(this.max, this.current);
        }
        return this.max;
    }

}

const _Kadanes = Kadanes;
export { _Kadanes as Kadanes };