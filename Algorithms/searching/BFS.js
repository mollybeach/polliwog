// write BFS class algorithm in javascript
// Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key'[1]) and explores the neighbor nodes first, before moving to the next level neighbors.
//
// The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.
//
// The basic idea is to start from the root or any arbitrary node and mark the node and move to the adjacent unmarked node and continue this loop until there is no unmarked adjacent node. Then backtrack and check for other unmarked nodes and traverse them. Finally print the nodes in the path.
//
//     The breadth first search algorithm is implemented using queue data structure. The basic idea is as follows:
//     Pick a starting node and push all its adjacent nodes into a queue.
//     Pop a node from queue to select the next node to visit and push all its adjacent nodes into a queue.
//     Repeat this process until the queue is empty. However, ensure that the nodes that are visited are marked. This will prevent you from visiting the same node more than once. If you do not mark the nodes that are visited and you visit the same node more than once, you may end up in an infinite loop.
//     */
class BFS {
    constructor() {
        this.root = null;
    }
    bfs(root) {
        if (root == null) {
            return;
        }
        let queue = [];
        queue.push(root);
        while (queue.length > 0) {
            let node = queue.shift();
            console.log(node.data);
            if (node.left != null) {
                queue.push(node.left);
            }
            if (node.right != null) {
                queue.push(node.right);
            }
        }
    }
}
const _BFS = BFS;
export { _BFS as BFS };



/*class BFS {
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
}*/