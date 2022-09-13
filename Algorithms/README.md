## GROUPS OF ALGORITHMS
<pre class="notranslate">
<code>
function find_averages_of_subarrays(K, arr) {
    const result = [];
    let windowSum = 0, windowStart = 0;
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd];               // add the next element
      if (windowEnd >= K - 1) {
        result.push(windowSum / K);              // calculate the average
        windowSum -= arr[windowStart];
        windowStart += 1;                       // slide the window ahead
      }
    }
    return result;
  }
  </pre>


/*
Groups of ALGORITHMS: 
#1 SEARCHING

    Linear Search.
    Binary Search.
    Depth First Search.
    Breadth First Search.
    Jump Search.
    Exponential Search.
    Interpolation Search.
    Sublist Search (Search a linked list in another list).
    Fibonacci Search.
    The Ubiquitous Binary Search.
    Recursive program to linearly search an element in a given array.
    Recursive function to do substring search.
    Iterative Program to linearly search an element in a given array.
    Recursive program to do exponential search.

#2 SORTING
    Insertion Sort
    Heap Sort
    Selection Sort
    Merge Sort
    Quick Sort
    Bubble Sort
    Counting Sort
    Radix Sort
    Bucket Sort
    Shell Sort
    Comb Sort
    Cycle Sort
    Pigeonhole Sort
    Tim Sort
    Stooge Sort
    Pancake Sort
    Bitonic Sort
    Bogo Sort
    Gnome Sort
    Cocktail Sort
    Strand Sort
    Tree Sort
    Cube Sort
    Odd Even Sort


#3 GRAPHS

    Krushal's 
    Dijkstra's 
    Bellman Ford 
    Floyd Warshall 
    Topological Sort 
    Flood Fill 
    Lee 


#4 ARRAYS

    Kadane's 
    Floyd's Cycle Detection 
    KMP 
    Quick Select 
    Boyer - More Majority Vote 

#5 BASICS

    Huffman Coding Compression 
    Euclid's 
    Union Find 
    Trie
    Disjoint Union Set
*/
/*
Find the group of this algorithm from the 5 groups above.
Astar is a graph algorithm.
Bellman Ford is a graph algorithm.
Disjoint Set is a basic algorithm.
Kruskal is a graph algorithm.
Floyd Warshall is a graph algorithm.
Flood Fill is a graph algorithm.
Sliding Window is a basic algorithm.
Dijkstra is a graph algorithm.
Combininatorics is a basic algorithm. why is it in the basic group? because it is a basic concept. types of combinatorics: Permutation, Combination, and Variation.
Prim is a graph algorithm. what kind of graph algorithm? a minimum spanning tree algorithm.


combinatorics is a basic algorithm. why is it in the basic group? because it is a basic concept. types of combinatorics: Permutation, Combination, and Variation.

input for combinatorics: n, r

output for combinatorics: nPr, nCr, nVr

nPr = n! / (n-r)!
nCr = n! / (n-r)! * r!
nVr = n! / (n-r)! * r! * r!

    


types of matrix algorithms: 

The Union-Find Disjoint Sets (UFDS) data structure is used to model a collection of disjoint sets, which is able to efficiently (i.e., in nearly constant time) determine which set an item belongs to, test if two items belong to the same set, and union two disjoint sets into one when needed. It can be used to find connected components in an undirected graph, and can hence be used as part of Kruskal's algorithm for the Minimum Spanning Tree (MST) problem.

