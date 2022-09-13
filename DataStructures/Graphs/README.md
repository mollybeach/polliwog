# GRAPHS

## Types of Graph Data Structures

1. Adjacency Matrix
2. Adjacency List
3. Incidence Matrix
4. Incidence List
5. Weighted Graph
6. Unweighted Graph
7. Directed Graph
8. Undirected Graph
9. Cyclic Graph
10. Acyclic Graph
11. Connected Graph
12. Disconnected Graph
13. Tree

![graphs](../../files/graphtypes.gif)



A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph. In this article, we will understand the difference between the ways of representation of the graph. 

A graph can be represented in mainly two ways. They are: 
 
1. Adjacency Matrix is a 2D array of size V x V where V is the number of vertices in a graph. 
    Let the 2D array be adj[][], a slot adj[i][j] = 1 indicates that there is an edge from vertex i to vertex j. Adjacency matrix for undirected graph is always symmetric. Adjacency Matrix is also used to represent weighted graphs. If adj[i][j] = w, then there is an edge from vertex i to vertex j with weight w.

2. Adjacency List: An Adjacency list is an array consisting of the address of all the linked lists. 
    The first node of the linked list represents the vertex and the remaining lists connected to this node represents the vertices to which this node is connected. This representation can also be used to represent a weighted graph. The linked list can slightly be changed to even store the weight of the edge.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Let us consider a graph to understand the adjacency list and adjacency matrix representation. Let the undirected graph be: 

![undirected graph](https://media.geeksforgeeks.org/wp-content/uploads/20200609203724/graph.png)

Shown in: 

Adjacency Matrix: In the adjacency matrix representation, a graph is represented in the form of a two-dimensional array. The size of the array is V x V, where V is the set of vertices. The following image represents the adjacency matrix representation: 
 

![adjacency matrix](https://media.geeksforgeeks.org/wp-content/uploads/20200609204115/matrix.png)

let myAdjMatrix = [ <br/>
    [0, 1, 0, 0, 1], <br/>
    [1, 0, 1, 0, 0], <br/>
    [0, 1, 0, 1, 0], <br/>
    [0, 0, 1, 0, 1], <br/>
    [1, 0, 0, 1, 0] <br/>
] <br/>


Adjacency List: In the adjacency list representation, a graph is represented as an array of linked list. The index of the array represents a vertex and each element in its linked list represents the  vertices that form an edge with the vertex. The following image represents the adjacency list representation:

![adjacency list](https://media.geeksforgeeks.org/wp-content/uploads/20200609204414/linklist.png)
// write myAdjMatrix as an adjacency list

let myAdjList = [ <br/>
    [1, 4], <br/>
    [0, 2], <br/>
    [1, 3], <br/>
    [2, 4], <br/>
    [0, 3] <br/>
] <br/>

<table>
<tr>
<td> <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200609203724/graph.png" alt="drawing" width="200"/> </td>
<td> <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200609204115/matrix.png" alt="drawing" width="200"/> </td>
<td> <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200609204414/linklist.png" alt="drawing" width="200"/> </td>
</tr>
</table>

![adjListvsMatrix](../../files/adjListVsMatrix.png)
label {
  display: block;
  margin: 20px 0 0;
  border-bottom: 1px solid green;
}
label:hover {
  text-decoration: underline;
}
input {
  position: absolute;
  left: -999em;
}
.hide {
  width: 50%;
  border: 1px solid #000;
  background: red;
  max-height: 99em;
  opacity: 1;
  height: auto;
  overflow: hidden;
  transition: opacity 1.5s linear, max-height 1.5s linear;
}
.hide p {
  padding: 10px;
  margin: 0;
}
.ex1 input[type="checkbox"]:checked + div {
  opacity: 0;
  max-height: 0;
  border: none;
}
.follow {
  border-top: 1px solid blue;
  margin: 0;
}

/* example 2 */
.inner {
  position: relative;
  overflow: hidden;
}
.hide2 {
  width: 50%;
  float: left;
  clear: both;
  border: 1px solid #000;
  background: red;
  opacity: 1;
  overflow: hidden;
  transform: translateY(0);
  margin: 0;
  transition: all 1.5s linear, margin 0s linear 0s;
}
.hide2 p {
  padding: 10px;
  margin: 0;
}
.ex2 .follow {
  clear: both;
}

.ex2 input[type="checkbox"]:checked + .inner .hide2 {
  opacity: 0;
  transform: translateY(-100%);
  margin-bottom: -999em;
  transition: all 1.5s linear, margin 0s linear 1.5s;
}

/* example 3 */
.ex3 .hide3 {
  width: 50%;
  display: table;
  height: 150px; /* any arbitrary height but best at the minimum initial height you would want. */
  overflow: hidden;
  background: red;
  transition: all 0.5s ease;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
}
.inner3 {
  padding: 10px;
}
.ex3 input[type="checkbox"]:checked + .hide3 {
  height: 0;
  opacity: 0;
  display: block;
}
// inner css

<!-- none are perfect but may be useful in certain situations -->



<h2 style="color: red">Method 3 - using display:table and height for animation</h2>
<div class="ex3">
  <label for="item-3">Toggle Div</label>
  <input type="checkbox" name="one" id="item-3">
  <div class="hide3" style=" width: 50%; display: table; height: 150px; overflow: hidden; background: red;transition: all 0.5s ease; border-left: 1px solid #000;  border-right: 1px solid #000">
    <div class="inner3" style="padding 10px">
      <p>Equation billions upon billions! Courage of our questions decipherment, take root and flourish, cosmic ocean paroxysm of global death. Light years inconspicuous motes of rock and gas from which we spring something incredible is waiting to be known,
        muse about!</p>
      <p>Equation billions upon billions! Courage of our questions decipherment, take root and flourish, cosmic ocean paroxysm of global death. Light years inconspicuous motes of rock and gas from which we spring something incredible is waiting to be known,
        muse about!</p>
      <p>Equation billions upon billions! Courage of our questions decipherment, take root and flourish, cosmic ocean paroxysm of global death. Light years inconspicuous motes of rock and gas from which we spring something incredible is waiting to be known,
        muse about!</p>
    </div>
  </div>
  <p class="follow">Following content</p>
  <p>Following content</p>
  <p>Following content</p>
  <p>Following content</p>
  <p>Following content</p>
  <p>Following content</p>
  <p>Following content</p>
  <p>Following content</p>
  <p>Following content</p>
  <p>Following content</p>
  <p>Following content</p>
</div>



