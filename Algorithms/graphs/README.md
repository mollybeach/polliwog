#Graph Algorithms
[]: # Algorithm: Graph Algorithms
[]: # Input: Graph
[]: # Output: Graph
[]: # Dependencies: Graph
[]: # Description: Graph algorithms are algorithms that operate on graphs. Graphs are mathematical structures used to model pairwise relations between objects. A graph in this context is made up of vertices (also called nodes or points), which are connected by edges (also called links or lines). A single edge may connect two vertices, but no vertex is connected to itself. A graph may be directed or undirected. In a directed graph, edges are not bidirectional; in an undirected graph, edges are bidirectional. A graph may also be weighted, where the value of each edge is a real number. Graphs are one of the most common models for representing data in computer science. Graph algorithms are used in a wide variety of applications, including social networks, circuit design, and data compression.
[]: # Time Complexity: O(V+E)
[]: # Space Complexity: O(V+E)
[]: # Author: [Aditya Prakash](


Types of Graphs : 
    1. Undirected Graph
    2. Directed Graph
    3. Weighted Graph
    4. Unweighted Graph
    5. Cyclic Graph
    6. Acyclic Graph
    7. Connected Graph
    8. Disconnected Graph
    9. Tree





Types of Graph Algorithms

1. Path Finding Algorithms:
* Dijkstra's Algorithm
* A* Search Algorithm
* Bellman-Ford Algorithm
* Floyd-Warshall Algorithm
* Lee Algorithm
* Breadth First Search
* Depth First Search

Path Finding Algorithm 
 Input : Graph, source vertex and destination vertex
    Output : Shortest path between source and destination vertex
    1. Create a set sptSet (shortest path tree set) that keeps track of vertices included in shortest path tree, i.e., whose minimum distance from source is calculated and finalized. Initially, this set is empty.
    2. Assign a distance value to all vertices in the input graph. Initialize all distance values as INFINITE. Assign distance value as 0 for the source vertex so that it is picked first.
    3. While sptSet doesn’t include all vertices
        a) Pick a vertex u which is not there in sptSet and has minimum distance value.
        b) Include u to sptSet.
        c) Update distance value of all adjacent vertices of u. To update the distance values, iterate through all adjacent vertices. For every adjacent vertex v, if sum of distance value of u (from source) and weight of edge u-v, is less than the distance value of v, then update the distance value of v.




2. Minimum Spanning Tree Algorithms
* Kruskal's Algorithm
* Prim's Algorithm

3. Topological Sorting
* Kahn's Algorithm
* Depth First Search
* Topological Sorting


4. Cycle Detection
* Floyd's Cycle Detection Algorithm
* Union-Find Algorithm

5. Shortest Path
* Dijkstra's Algorithm
* Bellman-Ford Algorithm
* Floyd-Warshall Algorithm

6. Miscellaneous
* Flood Fill Algorithm
* Huffman Coding Compression Algorithm
* Union-Find Algorithm
* Trie
* Disjoint Union Set

7. Other Algorithms
* Kadane's Algorithm
* Quick Select Algorithm
* Boyer-Moore Majority Vote Algorithm
* Euclid's Algorithm




![graph](https://miro.medium.com/max/1400/1*lJ5SvUUDWHMTC9TsePIt1A.png)


A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph. In this article, we will understand the difference between the ways of representation of the graph. 

A graph can be represented in mainly two ways. They are: 
 

Adjacency List: An Adjacency list is an array consisting of the address of all the linked lists. The first node of the linked list represents the vertex and the remaining lists connected to this node represents the vertices to which this node is connected. This representation can also be used to represent a weighted graph. The linked list can slightly be changed to even store the weight of the edge.
Adjacency Matrix: Adjacency Matrix is a 2D array of size V x V where V is the number of vertices in a graph. Let the 2D array be adj[][], a slot adj[i][j] = 1 indicates that there is an edge from vertex i to vertex j. Adjacency matrix for undirected graph is always symmetric. Adjacency Matrix is also used to represent weighted graphs. If adj[i][j] = w, then there is an edge from vertex i to vertex j with weight w.
Let us consider a graph to understand the adjacency list and adjacency matrix representation. Let the undirected graph be: 

![undirected graph](https://media.geeksforgeeks.org/wp-content/uploads/20200609203724/graph.png)

Adjacency Matrix: In the adjacency matrix representation, a graph is represented in the form of a two-dimensional array. The size of the array is V x V, where V is the set of vertices. The following image represents the adjacency matrix representation: 
 

![adjacency matrix](https://media.geeksforgeeks.org/wp-content/uploads/20200609204115/matrix.png)

Adjacency List: In the adjacency list representation, a graph is represented as an array of linked list. The index of the array represents a vertex and each element in its linked list represents the  vertices that form an edge with the vertex. The following image represents the adjacency list representation:

![adjacency list](https://media.geeksforgeeks.org/wp-content/uploads/20200609204414/linklist.png)


![adjListvsMatrix](../../files/adjListVsMatrix.png)