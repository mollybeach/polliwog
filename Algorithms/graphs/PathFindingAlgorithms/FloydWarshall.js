// FloydWarshall Algorithm
// Used to find the shortest path between all pairs of vertices in a weighted graph
// It is a dynamic programming algorithm
// It is a all pairs shortest path algorithm
// It is a negative edge weight algorithm
// It is a directed graph algorithm
// It is a non-greedy algorithm
// It is a non-recursive algorithm
// It is a non-branching algorithm
// It is a non-parallel algorithm
// used to find the shortest path between all pairs of vertices in a weighted graph
class FloydWarshall {
    constructor(graph) {
        this.graph = graph;
        this.distances = new Array(this.graph.size).fill().map(() => new Array(this.graph.size).fill(Infinity));
        this.floydWarshall();
    }
    floydWarshall() {
        for (let i = 0; i < this.graph.size; i++) {
            for (let j = 0; j < this.graph.size; j++) {
                if (this.graph.matrix[i][j] !== 0) {
                    this.distances[i][j] = this.graph.matrix[i][j];
                }
            }
        }
        for (let k = 0; k < this.graph.size; k++) {
            for (let i = 0; i < this.graph.size; i++) {
                for (let j = 0; j < this.graph.size; j++) {
                    const distance = this.distances[i][k] + this.distances[k][j];
                    if (distance < this.distances[i][j]) {
                        this.distances[i][j] = distance;
                    }
                }
            }
        }
    }
}