// Bellman Ford Algorithm in JavaScript
// Used to find the shortest path from a source vertex to all other vertices in a weighted graph
// It is a dynamic programming algorithm
// It is a single source shortest path algorithm
// It is a Greedy algorithm
// It is a negative edge weight algorithm
// It is a directed graph algorithm

class BellmanFord {
    constructor(graph, source) {
        this.graph = graph;
        this.source = source;
        this.distances = new Array(this.graph.size).fill(Infinity);
        this.distances[this.source] = 0;
        this.bellmanFord();
    }
    bellmanFord() {
        for (let i = 0; i < this.graph.size - 1; i++) {
            for (let j = 0; j < this.graph.size; j++) {
                for (let k = 0; k < this.graph.size; k++) {
                    if (this.graph.matrix[j][k] !== 0) {
                        const distance = this.distances[j] + this.graph.matrix[j][k];
                        if (distance < this.distances[k]) {
                            this.distances[k] = distance;
                        }
                    }
                }
            }
        }
    }
}