// give an example of a directed graph
let graph = {
    a: { b: 7, c: 8 },
    b: { a: 7, f: 2 },
    c: { a: 8, f: 6, g: 4 },
    d: { f: 8 },
    e: { h: 1 },
    f: { b: 2, c: 6, d: 8, g: 9, h: 3 },
    g: { c: 4, f: 9 },
    h: { e: 1, f: 3 }
    };
//let result = Dijkstra(graph, 'a');

// make a direct graph data structure
class DirectedGraph {
    constructor() {
        this.nodes = [];
        this.edges = [];
        this.numberOfEdges = 0;
    }
    addNode(node) {
        this.nodes.push(node);
        this.edges[node] = [];
    }
    removeNode(node) {
        let index = this.nodes.indexOf(node);
        if (index > -1) {
            this.nodes.splice(index, 1);
        }
        while (this.edges[node].length) {
            let adjacentNode = this.edges[node].pop();
            this.removeEdge(adjacentNode, node);
        }
    }
    addEdge(node1, node2) {
        this.edges[node1].push(node2);
        this.numberOfEdges++;
    }
    removeEdge(node1, node2) {
        let index1 = this.edges[node1] ? this.edges[node1].indexOf(node2) : -1;
        let index2 = this.edges[node2] ? this.edges[node2].indexOf(node1) : -1;
        if (index1 > -1) {
            this.edges[node1].splice(index1, 1);
            this.numberOfEdges--;
        }
        if (index2 > -1) {
            this.edges[node2].splice(index2, 1);
        }
    }
    size() {
        return this.nodes.length;
    }
    relations() {
        return this.numberOfEdges;
    }
    traverseDFS(node, fn) {
        if (!~this.nodes.indexOf(node)) {
            return console.log('Node not found');
        }
        let visited = [];
        this._traverseDFS(node, visited, fn);
    }
    _traverseDFS(node, visited, fn) {
        visited[node] = true;
        if (this.edges[node] !== undefined) {
            fn(node);
        }
        for (let i = 0; i < this.edges[node].length; i++) {
            if (!visited[this.edges[node][i]]) {
                this._traverseDFS(this.edges[node][i], visited, fn);
            }
        }
    }
    traverseBFS(node, fn) {
        if (!~this.nodes.indexOf(node)) {
            return console.log('Node not found');
        }
        let queue = [];
        queue.push(node);
        let visited = [];
        visited[node] = true;
        while (queue.length) {
            node = queue.shift();
            fn(node);
            for (let i = 0; i < this.edges[node].length; i++) {
                if (!visited[this.edges[node][i]]) {
                    visited[this.edges[node][i]] = true;
                    queue.push(this.edges[node][i]);
                }
            }
        }
    }
    pathFromTo(nodeSource, nodeDestination) {
        if (!~this.nodes.indexOf(nodeSource)) {
            return console.log('Node not found');
        }
        let queue = [];
        queue.push(nodeSource);
        let visited = [];
        visited[nodeSource] = true;
        let paths = [];
        while (queue.length) {
            let node = queue.shift();
            for (let i = 0; i < this.edges[node].length; i++) {
                if (!visited[this.edges[node][i]]) {
                    visited[this.edges[node][i]] = true;
                    queue.push(this.edges[node][i]);
                    // save paths between nodes
                    paths[this.edges[node][i]] = node;
                }
            }
        }
        if (!visited[nodeDestination]) {
            return undefined;
        }
        let path = [];
        for (let j = nodeDestination; j != nodeSource; j = paths[j]) {
            path.push(j);
        }
        path.push(j);
        return path.reverse().join('-');
    }
    print() {
        console.log(this.nodes.map(function(node) {
            return (node + ' -> ' + this.edges[node].join(', ')).trim();
        }, this).join(' | '));
    }
}

const _DirectedGraph = DirectedGraph;
export { _DirectedGraph as DirectedGraph };


