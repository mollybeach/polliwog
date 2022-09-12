
// Floyds Cycle Detection Algorithm is used to find the first element of the cycle in a linked list
// The algorithm is based on the fact that the distance between the first element of the cycle and the first element of the linked list is equal to the distance between the meeting point and the first element of the cycle
// what kind of algorithm is this? (sorting, searching, graph, math, etc)
class FloydsCycle {
    constructor() {
        this.tortoise = 0;
        this.hare = 0;
    }
    findCycle(array) {
        this.tortoise = array[0];
        this.hare = array[0];
        while (true) {
            this.tortoise = array[this.tortoise];
            this.hare = array[array[this.hare]];
            if (this.tortoise == this.hare) {
                break;
            }
        }
        this.tortoise = array[0];
        while (this.tortoise != this.hare) {
            this.tortoise = array[this.tortoise];
            this.hare = array[this.hare];
        }
        return this.hare;
    }
}

const _FlodysCycle = FloydsCycle;
export { _FlodysCycle as FloydsCycle};