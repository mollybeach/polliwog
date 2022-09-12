// BoyerMoore algorithm for finding majority element in an array
// BoyerMoore algorithm is based on the fact that if the majority element exists in the array, then it will be the last element left after cancelling out each occurrence of an element with all the other elements that are different from it.
// what kind of algorithm is this? (sorting, searching, graph, math, etc)

class BoyerMoore {
    constructor() {
        this.count = 0;
        this.majority = 0;
    }
    findMajority(array) {
        for (let i = 0; i < array.length; i++) {
            if (this.count == 0) {
                this.majority = array[i];
                this.count = 1;
            } else if (this.majority == array[i]) {
                this.count++;
            } else {
                this.count--;
            }
        }
        return this.majority;
    }
}

const _BoyerMoore = BoyerMoore;
export { _BoyerMoore as BoyerMoore };