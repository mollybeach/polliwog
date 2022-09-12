// write DFS class algorithm in javascript
// Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.
// So the basic idea is to start from the root or any arbitrary node and mark the node and move to the adjacent unmarked node and continue this loop until there is no unmarked adjacent node. Then backtrack and check for other unmarked nodes and traverse them. Finally print the nodes in the path.
//
//     The depth first search algorithm is implemented using stack data structure. The basic idea is as follows:
//     Pick a starting node and push all its adjacent nodes into a stack.
//     Pop a node from stack to select the next node to visit and push all its adjacent nodes into a stack.
//     Repeat this process until the stack is empty. However, ensure that the nodes that are visited are marked. This will prevent you from visiting the same node more than once. If you do not mark the nodes that are visited and you visit the same node more than once, you may end up in an infinite loop.
//     */
class DFS {
    constructor() {
        this.root = null;
    }
    dfs(root) {
        if (root == null) {
            return;
        }
        console.log(root.data);
        this.dfs(root.left);
        this.dfs(root.right);
    }
}
const _DFS = DFS;
export { _DFS as DFS };


/*// make a DFS class
class DFS {
    constructor(graph) {
        this.graph = graph;
        this.vertices = [];
        this.dfs();
    }
    dfs() {
        const stack = new Stack();
        const visited = new Array(this.graph.size).fill(false);
        stack.push(0);
        visited[0] = true;
        while (!stack.isEmpty()) {
            const vertex = stack.pop();
            this.vertices.push(vertex);
            for (let i = 0; i < this.graph.size; i++) {
                if (this.graph.matrix[vertex][i] !== 0 && !visited[i]) {
                    stack.push(i);
                    visited[i] = true;
                }
            }
        }
    }
}
// when you want to traverse a graph in a depth-first manner
// why do you traverse pre-order? because you want to visit the root node first
// why do you traverse post-order? because you want to visit the leaf nodes first
*/