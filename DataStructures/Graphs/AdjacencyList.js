import {LinkedList} from '../LinkedList/LinkedList.js';
// make an adjacency list class
class AdjacencyList {
    constructor(size) {
        this.size = size;
        this.list = new Array(size).fill(0).map(() => new LinkedList());
    }
    addEdge(vertex1, vertex2) {
        this.list[vertex1].insert(vertex2);
        this.list[vertex2].insert(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.list[vertex1].remove(vertex2);
        this.list[vertex2].remove(vertex1);
    }
    print() {
        this.list.forEach((list, vertex) => {
            console.log(`${vertex} => ${list.print()}`);
        });
    }
}

// give an example of how to use the adjacency list class
const adjacencyList = new AdjacencyList(5);
adjacencyList.addEdge(0, 1);
adjacencyList.addEdge(0, 2);
adjacencyList.addEdge(1, 3);

adjacencyList.print();