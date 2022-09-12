// write UnionFind class algorithm in javascript
// The union–find algorithm is an algorithm that performs two useful operations on a set of elements partitioned into a number of disjoint (non-overlapping) subsets:
//     Find: Determine which subset a particular element is in. This can be used for determining if two elements are in the same subset.
//     Union: Join two subsets into a single subset.
// The union–find algorithm is also known as the disjoint-set data structure. It provides near-constant-time operations (bounded by the inverse Ackermann function) when used naively, and can be optimised to achieve nearly linear time.
// The algorithm is useful for finding connected components in a graph, where the graph is represented using an edge list or an adjacency matrix. It is also useful for determining the connectivity of a network, where the network is represented using an adjacency matrix.
// The algorithm is described by Cormen et al. in their book Introduction to Algorithms. The algorithm is also described in Sedgewick's book Algorithms in C, Part 5: Graph Algorithms.

class UnionFind {
    constructor() {
        this.root = null;
    }
    find(node) {
        if (node.parent == node) {
            return node;
        }
        return this.find(node.parent);
    }
    union(node1, node2) {
        let parent1 = this.find(node1);
        let parent2 = this.find(node2);
        if (parent1.rank >= parent2.rank) { //rank is essentially the height of the tree
            parent1.rank = (parent1.rank == parent2.rank) ? parent1.rank + 1 : parent1.rank;
            parent2.parent = parent1;
        }
        else {
            parent1.parent = parent2;
        }
    }
}

const _UnionFind = UnionFind;
export { _UnionFind as UnionFind };