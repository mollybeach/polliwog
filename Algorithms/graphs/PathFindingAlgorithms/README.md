# Path finding algorithms

## Description

Path finding algorithms are algorithms that find the shortest path between two vertices in a graph. The shortest path is the path with the least number of edges. Path finding algorithms are used in a wide variety of applications, including social networks, circuit design, and data compression.

## Types of Path Finding Algorithms

1. Dijkstra's Algorithm
2. A* Search Algorithm
3. Bellman-Ford Algorithm
4. Floyd-Warshall Algorithm
5. Lee Algorithm

## Dijkstra's Algorithm

Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later.

### Input

Graph, source vertex and destination vertex

### Output

Shortest path between source and destination vertex

### Algorithm

1. Create a set sptSet (shortest path tree set) that keeps track of vertices included in shortest path tree, i.e., whose minimum distance from source is calculated and finalized. Initially, this set is empty.

2. Assign a distance value to all vertices in the input graph. Initialize all distance values as INFINITE. Assign distance value as 0 for the source vertex so that it is picked first.

3. While sptSet doesn’t include all vertices

    a) Pick a vertex u which is not there in sptSet and has minimum distance value.

    b) Include u to sptSet.

    c) Update distance value of all adjacent vertices of u. To update the distance values, iterate through all adjacent vertices. For every adjacent vertex v, if sum of distance value of u (from source) and weight of edge u-v, is less than the distance value of v, then update the distance value of v.

## A* Search Algorithm

A* is a computer algorithm that is widely used in pathfinding and graph traversal, which is the process of plotting an efficiently traversable path between multiple points, called nodes. It enjoys widespread use due to its performance and accuracy. However, in practical travel-routing systems, it is generally outperformed by algorithms which can pre-process the graph to attain better performance, although other work has found A* to be superior to other approaches.

### Input

Graph, source vertex and destination vertex

### Output

Shortest path between source and destination vertex

### Algorithm

1. Create an open list having nodes which are to be evaluated.
2. Create a closed list having nodes which are already evaluated.
3. Insert the starting node into the open list.

4. Loop until you find the end

    a) Get the current node from the open list having the lowest f cost value.

    b) Pop the current node off the open list.

    c) Generate all the walkable nodes around the current node. Check if the node is already on the closed list. If it is, skip to the next neighbor. Otherwise, if it isn’t on the closed list, do the following.

        i) If it isn’t on the open list, add it to the open list. Make the current node the parent of this node. Record the f, g, and h costs of the node.

        ii) If it is on the open list already, check to see if this path to that node is better, using g cost as the measure. A lower g cost means that this is a better path. If so, change the parent of the node to the current node, and recalculate the g and f scores of the node. If you are keeping your open list sorted by f cost, you may need to resort the list to account for the change.

    d) Stop when you:
    
            i) Add the target node to the closed list, in which case the path has been found (see note below), or
    
            ii) Fail to find the target node, and the open list is empty. In this case, there is no path.

5. Save the path. Working backwards from the target node, go from each node to its parent node until you reach the starting node. That is your path.

## Bellman-Ford Algorithm

The Bellman–Ford algorithm is an algorithm that computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph. It is slower than Dijkstra's algorithm for the same problem, but more versatile, as it is capable of handling graphs in which some of the edge weights are negative numbers.

### Input

Graph, source vertex and destination vertex

### Output

Shortest path between source and destination vertex

### Algorithm

1. This step initializes distances from the source to all vertices in the input graph. Create an array dist[] of size |V| with all values as infinite except dist[src] where src is source vertex.

2. This step calculates shortest distances. Do following |V|-1 times where |V| is the number of vertices in given graph.

    a) Do following for each edge u-v

        i) If dist[v] > dist[u] + weight of edge uv, then update dist[v]

            dist[v] = dist[u] + weight of edge uv

3. This step reports if there is a negative weight cycle in graph. Do following for each edge u-v


    If dist[v] > dist[u] + weight of edge uv, then “Graph contains negative weight cycle”

The idea of step 3 is, step 2 guarantees the shortest distances if the graph doesn’t contain a negative weight cycle. If we iterate through all edges one more time and get a shorter path for any vertex, then there is a negative weight cycle.

## Floyd-Warshall Algorithm

The Floyd–Warshall algorithm is an algorithm for finding shortest paths in a weighted graph with positive or negative edge weights (but with no negative cycles). A single execution of the algorithm will find the lengths (summed weights) of the shortest paths between all pairs of vertices, though it does not return details of the paths themselves.

### Input

Graph

### Output

Shortest path between all pairs of vertices

### Algorithm

1. This step initializes distances from the source to all vertices in the input graph. Create a distance matrix dist[][] of size |V|*|V| with all values as infinite except dist[i][i] where i is source vertex.

2. This step calculates shortest distances. Do following |V|-1 times where |V| is the number of vertices in given graph.

    a) Do following for each edge u-v

        i) If dist[v] > dist[u] + weight of edge uv, then update dist[v]

            dist[v] = dist[u] + weight of edge uv

3. This step reports if there is a negative weight cycle in graph. Do following for each edge u-v



    If dist[v] > dist[u] + weight of edge uv, then “Graph contains negative weight cycle”

The idea of step 3 is, step 2 guarantees the shortest distances if the graph doesn’t contain a negative weight cycle. If we iterate through all edges one more time and get a shorter path for any vertex, then there is a negative weight cycle.

## Lee Algorithm

The Lee algorithm is a pathfinding algorithm that finds the shortest path between two points in a grid. It is named after its inventor, Thomas Lee. It is a breadth-first search algorithm that uses a cost matrix to store the cost of moving to each cell. The cost of moving to a cell is the number of steps required to reach that cell from the starting cell. The algorithm is used in the game

### Input

Graph, source vertex and destination vertex

### Output

Shortest path between source and destination vertex

### Algorithm

1. Create a cost matrix, initialized with all 0’s.

2. Create a queue and enqueue the starting cell to it.

3. Loop until queue is empty

    a) Dequeue a cell from the queue and process it.

    b) If the dequeued cell is the destination cell, then we are done. Otherwise, enqueue its adjacent cells to the queue.

    c) Update the cost matrix for adjacent cells. To update the cost matrix, check if the current path cost (i.e., cost matrix value) is greater than the new path cost (i.e., cost matrix value + 1). If yes, then update the cost matrix value.
    
## Conclusion

In this article, we have discussed the various algorithms used for pathfinding. We have also discussed the various applications of pathfinding algorithms. We have also discussed the various algorithms used for pathfinding. We have also discussed the various applications of pathfinding algorithms.

