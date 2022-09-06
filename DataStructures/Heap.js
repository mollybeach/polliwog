// make a Heap class
class Heap {
    constructor(array) {
        this.array = array;
        this.heapify();
    }
    heapify() {
        for (let i = Math.floor(this.array.length / 2); i >= 0; i--) {
            this.siftDown(i);
        }
    }
    siftDown(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let largest = index;
        if (left < this.array.length && this.array[left] > this.array[largest]) {
            largest = left;
        }
        if (right < this.array.length && this.array[right] > this.array[largest]) {
            largest = right;
        }
        if (largest !== index) {
            [this.array[index], this.array[largest]] = [this.array[largest], this.array[index]];
            this.siftDown(largest);
        }
    }
    siftUp(index) {
        let parent = Math.floor((index - 1) / 2);
        if (parent >= 0 && this.array[index] > this.array[parent]) {
            [this.array[index], this.array[parent]] = [this.array[parent], this.array[index]];
            this.siftUp(parent);
        }
    }
    insert(value) {
        this.array.push(value);
        this.siftUp(this.array.length - 1);
    }
    extract() {
        const max = this.array[0];
        this.array[0] = this.array[this.array.length - 1];
        this.array.pop();
        this.siftDown(0);
        return max;
    }
    sort() {
        const sorted = [];
        while (this.array.length > 0) {
            sorted.push(this.extract());
        }
        return sorted;
    }
}