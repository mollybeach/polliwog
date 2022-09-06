// make a BFS class

class BFS {
    constructor(graph) {
        this.graph = graph;
        this.vertices = [];
        this.bfs();
    }
    bfs() {
        const queue = new Queue();
        const visited = new Array(this.graph.size).fill(false);
        queue.enqueue(0);
        visited[0] = true;
        while (!queue.isEmpty()) {
            const vertex = queue.dequeue();
            this.vertices.push(vertex);
            for (let i = 0; i < this.graph.size; i++) {
                if (this.graph.matrix[vertex][i] !== 0 && !visited[i]) {
                    queue.enqueue(i);
                    visited[i] = true;
                }
            }
        }
    }
}