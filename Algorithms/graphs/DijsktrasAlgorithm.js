import {PriorityQueue} from '../DataStructures/Queues/PriorityQueue.js';
import {WeightedGraph} from '../DataStructures/Graphs/WeightedGraph.js';
  class Dijkstra {
    constructor(start, finish, adjacencyList){
        this.start = start;
        this.finish = finish;
        this.adjacencyList = adjacencyList;
        // what can you put in a constructor 
    }
    findShortestPath(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {}, previous = {}, path = []; //to return at end
        let smallest;
        //build up initial state
        for (let vertex in this.adjacencyList) { 
          if (vertex === start) {
            distances[vertex] = 0;
            nodes.enqueue(vertex, 0);
          } else {
            distances[vertex] = Infinity;
            nodes.enqueue(vertex, Infinity);
          }
          previous[vertex] = null;
        }
        // turn line 14 through
        // as long as there is something to visit
        while (nodes.items.length) {
          smallest = nodes.dequeue().item;
          if (smallest === finish) {    //WE ARE DONE BUILD UP PATH TO RETURN AT END
            while (previous[smallest]) {       // as long as there is a previous node
              path.push(smallest);
              smallest = previous[smallest];
            }
            break;
          }
          if (smallest || distances[smallest] !== Infinity) { // what does this if statement do? it checks if the smallest is not null and if the distance of the smallest is not infinity which means it is not the start

            for (let neighbor in this.adjacencyList[smallest]) {
              let nextNode = this.adjacencyList[smallest][neighbor];   //find neighboring node
              let candidate = distances[smallest] + nextNode.weight; // //calculate new distance to neighboring node
              let nextNeighbor = nextNode.node;

              if (candidate < distances[nextNeighbor]) { // what does this if statement do? it checks if the candidate is less than the distance of the next neighbor
                distances[nextNeighbor] = candidate; //updating new smallest distance to neighbor   
                previous[nextNeighbor] = smallest;       //updating previous - How we got to neighbor
                nodes.enqueue(nextNeighbor, candidate);     //enqueue in priority queue with new priority
              }
            }
          } 
          // what does it do
        }
        return path.concat(smallest).reverse();
      }
  }
  
  
  
  //EXAMPLES=====================================================================
  
  let weighedGraph = new WeightedGraph();
  weighedGraph.addVertex("A");
  weighedGraph.addVertex("B");
  weighedGraph.addVertex("C");
  weighedGraph.addVertex("D");
  weighedGraph.addVertex("E");
  weighedGraph.addVertex("F");
  
  weighedGraph.addEdge("A", "B", 4);
  weighedGraph.addEdge("A", "C", 2);
  weighedGraph.addEdge("B", "E", 3);
  weighedGraph.addEdge("C", "D", 2);
  weighedGraph.addEdge("C", "F", 4);
  weighedGraph.addEdge("D", "E", 3);
  weighedGraph.addEdge("D", "F", 1);
  weighedGraph.addEdge("E", "F", 1);
  let dijkstra = new Dijkstra("A", "E", weighedGraph.adjacencyList);
  console.log(dijkstra.findShortestPath("A", "E"));