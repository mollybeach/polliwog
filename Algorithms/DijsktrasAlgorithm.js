
//import { PriorityQueue } from "../Queues/PriorityQueue";

class Queue {
    constructor(items){
        this.items = items ? items : [];
    }
    enqueue(item) {
        this.items.push(item);
    }                                                            // add an item to the queue
    dequeue() {
        return this.items.shift();
    }                                                           // remove an item from the queue
    isEmpty() {
        return this.items.length === 0;
    }                                                           // check if the queue is empty
    length() {
        return this.items.length;
    }                                                           // get the length of the queue
    front() {
        return this.items[0];
    }                                                           // get the first item in the queue
    back() {
        return this.items[this.items.length - 1];
    }                                                           // get the last item in the queue
    clear() {
        this.items = [];
    }                                                           // clear the queue
    size() {
        return this.items.length;
    }                                                           // get the size of the queue
    print() {
        console.log(this.items.toString());
    }                                                           // print the queue
}

class PriorityQueue extends Queue {
    constructor(items, compare) {
        super(items);
        this.compare = compare ? compare : (parent, child) => parent-child;
    }                   
    enqueue(item, priority) {                                                               // add an item to the queue
        priority = Math.max(Number(priority), 0);
        const element = {item:item, priority:priority};
                                                                                             // saves us from looping through the entire queue when the element has the lowest priority
        if(this.isEmpty() ) {
            this.items.push(element);
        } else if(this.compare(this.items[this.size()-1].priority, element.priority) < 0) {
            this.items.push(element);
        } else {
            for(let i=0; i<this.size(); i++) {
                if(this.compare( element.priority, this.items[i].priority ) < 0) {
                    this.items.splice(i, 0, element);
                    break;
                }
            }
        }
      return this.size;
    }
   
}
function Dijkstra(graph, source) {
    let dist = {};
    let previous = {};
    let Q = new PriorityQueue();
    for (let v in graph) {
        if (v === source) {
            dist[v] = 0;
            Q.enqueue(0, v);
        }
        else {
            dist[v] = Infinity;
            Q.enqueue(Infinity, v);
        }
        previous[v] = null;
    }
    while (!Q.isEmpty()) {
        let u = Q.dequeue();
        let neighbors = graph[u];
        for (let v in neighbors) {
            let alt = dist[u] + neighbors[v];
            if (alt < dist[v]) {
                dist[v] = alt;
                previous[v] = u;
                Q.enqueue(alt, v);
            }
        }
    }
    return {
        dist: dist,
        previous: previous
    };
}

// call the function:
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
    // what kind of graph is this?
    // it's a weighted graph
// find the shortest path from a to h
let result = Dijkstra(graph, 'a');
console.log(result.dist);

    // difference between a weighted graph and an unweighted graph
    // in an unweighted graph, the edges are all the same weight
    // in a weighted graph, the edges have different weights
    // in an unweighted graph, the shortest path is the path with the fewest edges
    // in a weighted graph, the shortest path is the path with the lowest weight
    // difference between a directed graph and an undirected graph
    // in a directed graph, the edges have a direction
    // in an undirected graph, the edges don't have a direction
    // in a directed graph, the shortest path is the path with the fewest edges
    // in an undirected graph, the shortest path is the path with the lowest weight

    // difference between weighted and directed graphs
    // in a weighted directed graph, the edges have a direction and different weights
/*Weighted Directed Graph and Undirected Graph
Directed and undirected graphs can also be weighted. A weighted directed graph is the same as a directed graph except that each edge has a weight or cost associated with it. An example is a road trip that starts in New York City and ends in Miami, but the journey is on a one-way road. The weight of the directed travel can be represented in distance or even fuel cost. Weighted undirected graph is similar to an undirected graph except for each edge, as seen in a weighted directed graph, has a cost associated with it. An example of a weighted undirected graph is taking the same road trip from New York City to Miami, but the car travels on a freeway where traffic flows in two directions.*/

// give example of a weighted directed graph

// weighted directed graph
// where is the direction? in the edges
// where is the weight? in the edges


const _Dijkstra = Dijkstra;
export { _Dijkstra as Dijkstra };