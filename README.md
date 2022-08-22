# leet

        
## Sorting Algorithms: 
        1. Bubble Sort
            Array == AlmostSorted && Array < Small Size
                 ⏰: O(n^2) 🪐 O(1)
        2. Selection Sort
            Array != Sorted && Array < Small Size
                 ⏰: O(n^2) 🪐: O(1)
        3. Insertion Sort
            Array  == AlmostSorted && Array < Small Size
                ⏰: O(n^2) 🪐: O(1)
        4. Merge Sort
            Array != Sorted && Array < Small Size
                 ⏰: O(nlogn) 🪐: O(n)
        5. Quick Sort
            Array != Sorted && Array > LargeSize
                 ⏰: O(nlogn) 🪐: O(logn)
        6. Heap Sort
            Array != Sorted && Array > LargeSize
                ⏰: O(nlogn) 🪐: O(1)
        7. Counting Sort
            Array == Integers && Array < Small Size
                ⏰: O(n+k) 🪐: O(k)
        8. Radix Sort
            Array == Integers && Array < Small Size
                ⏰: O(nk) 🪐: O(n+k)
        9. Bucket Sort
            Array == Integers && Array < Small Size
                ⏰: O(n+k) 🪐: O(n+k)

## 14 Patterns Algorithims

## 1. Sliding Window Pattern 🪟 ->
    ❓ SUBSTRING OR SUBARRAY FIND LONGEST OR SMALLEST CONTAIN CHARACTER
    🥚 Maximum Sum Subarray of Size K, Longest Substring with K Distinct Characters, String Anagrams, No-repeat Substring, etc.
      
            🎭 PsuendoCode Sliding Window Pattern 🪟
              ⏰: O(n) 🪐: O(n)
                            start = 0;
                            end = 0;
                            max = 0;
                            while (end < s.length()) {
                                // add s[end] to window
                                end++;
                                while (window needs shrink) {
                                    // remove s[start] from window
                                    start++;
                                }
                                max = max(max, end - start + 1);
                            }

## 2. Two Pointers Pattern 👯 -> 
    
    ❓ FIND A PAIR, TRIPLET or a SUBARRAY
    🥚 Squaring a Sorted Array, Triplets that Sum to Zero, Triplet Sum Close to Target, Triplets with Smaller Sum, Subarrays with Product Less than a Target, Comparing Strings containing Backspaces, etc.
      
        🎭 PsuendoCode Two Pointers Pattern 👯
          ⏰: O(n) 🪐: O(n)
                            left = 0;
                            right = 0;
                            while (right < s.length()) {
                                // add s[right] to window
                                right++;
                                while (window needs shrink) {
                                    // remove s[left] from window
                                    left++;
                                }
                            }

## 3. Fast and Slow Pointers Pattern 🐰&🐢 ->
    ❓ FIND CYCLE IN A LINKED LIST OR FIND THE MIDDLE OF A LINKED LIST
    🥚 Linked List Cycle, Palindrome LinkedList, Cycle in a Circular Array, etc.
        
        🎭 PsuendoCode Fast and Slow Pointers Pattern 🐰&🐢
         ⏰: O(n) 🪐: O(n)
                            slow = 0;
                            fast = 0;
                            while (fast < s.length()) {
                                if (s[fast] is not a duplicate) {
                                    // move slow pointer one step
                                    // add s[fast] to window
                                    slow++;
                                }
                                // move fast pointer one step
                                fast++;
                            }


## 4. Merge Intervals Pattern 🚗🚙 ->
    ❓  MERGE INTERVALS OR FIND OVERLAPPING INTERVALS
    🥚 Insert Interval, Intervals Intersection, Conflicting Appointments, Minimum Meeting Rooms, etc.
          🎭 PsuendoCode Merge Intervals Pattern 🚗🚙
            ⏰: O(n) 🪐: O(n)
                      sort the intervals by start time
                      start = intervals[0].start;
                      end = intervals[0].end;
                      for (i = 1; i < intervals.length; i++) {
                          interval = intervals[i];
                          if (interval.start <= end) { // overlapping intervals, adjust the 'end'
                              end = Math.max(interval.end, end);
                          } else { // non-overlapping interval, add the previous interval and reset
                              result.add(new Interval(start, end));
                              start = interval.start;
                              end = interval.end;
                          }
                      }
                      // add the last interval
                      result.add(new Interval(start, end));
                      return result;


 ## 5. Cyclic Sort Pattern 🌀 ->
    ❓ FIND MISSING # OR  SORT #s IN PLACE 
    🥚 Cyclic Sort, Find the Missing Number, Find all Missing Numbers, Find the Duplicate Number, Find all Duplicate Numbers, Find the Corrupt Pair, etc.
        
         🎭 PsuendoCode Cyclic Sort Pattern 🌀
            ⏰: O(n) 🪐: O(1)
                        i = 0;
                        while (i < nums.length) {
                            j = nums[i] - 1;
                            if (nums[i] != nums[j])
                                swap(nums, i, j); // put the number in its correct place
                            else
                                i++;
                        }

 ## 6. In-place Reversal of a LinkedList Pattern 🔄 ->
    ❓ REVERSE A SUBLIST, REVERSE EVERY K-ELEMENT IN SUBLIST
    🥚 Reverse a Sub-list, Reverse every K-element Sub-list, etc.
        
        🎭 PsuendoCode In-place Reversal of a LinkedList Pattern 🔄
          ⏰: O(n) 🪐: O(1)
              ListNode previous = null;
              ListNode current = head;
              while (current != null) {
                  next = current.next;
                  current.next = previous;
                  previous = current;
                  current = next;
              }

## 7. Tree Breadth First Search Pattern 🌳 ->
    ❓  FIND MIN DEPTH, MAX DEPTH, LEVEL AVERAGE OF BINARY TREE
    🥚 Level Order Traversal, Zigzag Traversal, Level Averages in a Binary Tree, Minimum Depth of a Binary Tree, Level Order Successor, Connect Level Order Siblings, etc. Tree Breadth First Search?

        🎭 PsuendoCode Tree Breadth First Search Pattern
          ⏰: O(n) 🪐: O(n)
              Queue<TreeNode> queue = new LinkedList<>();
              queue.offer(root);
              while (!queue.isEmpty()) {
                  TreeNode currentNode = queue.poll(); // add the node to the result list
                  // insert the children of current node in the queue
                  if (currentNode.left != null) queue.offer(currentNode.left);
                  if (currentNode.right != null) queue.offer(currentNode.right);
              }

## 8. Tree Depth First Search Pattern 🌲 ->
    ❓ FIND PATH WITH MAX SUM OR PATH WITH GIVEN SEQUENCE
    🥚 Reverse Level Order Traversal, Zigzag Traversal, Level Averages in a Binary Tree, Minimum Depth of a Binary Tree, Level Order Successor, Connect Level Order Siblings, etc.
        
       🎭 PsuendoCode Tree Depth First Search Pattern
        ⏰: O(n) 🪐: O(n)  

            Stack<TreeNode> stack = new Stack<>();
            stack.push(root);
            while (!stack.isEmpty()) {
                TreeNode currentNode = stack.pop(); // add the node to the result list
                // insert the children of current node in the stack
                if (currentNode.left != null) stack.push(currentNode.left);
                if (currentNode.right != null) stack.push(currentNode.right);
            }

## 9. Two Heaps Pattern ->
    ❓  MEDIAN OF # STREAM FIND K SMALLEST #
    🥚  Sliding Window Median, Find the Median of a Number Stream, etc.
        
         🎭 PsuendoCode Two Heaps Pattern  
            ⏰: O(n) 🪐: O(n)

              PriorityQueue<Integer> maxHeap = new PriorityQueue<>((n1, n2) -> n2 - n1);
               PriorityQueue<Integer> minHeap = new PriorityQueue<>((n1, n2) -> n1 - n2);
                for (num : nums) {
                    if (maxHeap.isEmpty() || num <= maxHeap.peek()) {
                        maxHeap.add(num);
                    } else {
                        minHeap.add(num);
                    }
                    // either both the heaps will have equal number of elements or
                    // max-heap will have one
                    // more element than the min-heap
                    if (maxHeap.size() > minHeap.size() + 1) {
                        minHeap.add(maxHeap.poll());
                    } else if (maxHeap.size() < minHeap.size()) {
                        maxHeap.add(minHeap.poll());
                    }
                }

## 10. Subsets Pattern 🐛 ->
    ❓  FIND ALL SUBSETS OF A SET OR FIND ALL SUBSETS ADD UP TO GIVEN #
    🥚 Find all subsets of a set, Find all subsets of a set with duplicates, Find all subsets with a given sum, etc.
        
        🐢 Solution: Brute Force ⏰:
        🐇 Solution:  🎭 PsuendoCode Subsets Pattern 🐛

          List<List<Integer>> subsets = new ArrayList<>();
          subsets.add(new ArrayList<>());
          for (currentNumber : nums) {
              // we will take all existing subsets
              // and insert the current number in them to create new subsets
              n = subsets.size();
              for (i = 0; i < n; i++) {
                  // create a new subset from the existing subset 
                  // and insert the current element to it
                  List<Integer> set = new ArrayList<>(subsets.get(i));
                  set.add(currentNumber);
                  subsets.add(set);
              }
          }

## 11. Modified Binary Search Pattern 🏁🔚 ->
    ❓  MINIMUM DIFFERENCE  OR FIND ELEMENT IN INFINITE SORTED ARRAY
    🥚 Order-agnostic Binary Search, Ceiling of a Number, Floor of a Number, Next Letter, Number Range, etc.

        🎭 PsuendoCode Modified Binary Search Pattern 🏁🔚
          ⏰: O(logn) 🪐: O(1)

            start = 0, end = arr.length - 1;
            while (start <= end) {
                // calculate the middle of the current range
                mid = start + (end - star
                if (key < arr[mid]) {
                    end = mid - 1; // the 'key' can be in the first half
                } else if (key > arr[mid]) {
                    start = mid + 1; // the 'key' can be in the second half
                } else { // found the key
                    return mid;
                }
            }
            // element is not found
            return -1;


 ## 12. Top 'K' Elements Pattern 🔝->
    ❓ TOP K #s OR FREQUENCY OF TOP K #s
    🥚 Top 'K' Numbers, Kth Largest Number in a Stream, K Closest Points to the Origin, etc.
        
        🎭 PsuendoCode Top 'K' Elements 
          ⏰: O(nlogk) 🪐: O(k)

            minHeap = new PriorityQueue<>((n1, n2) -> n1 - n2);
            for (i = 0; i < k; i++)             minHeap.add(nums[i]);
            for (i = k; i < nums.length; i++) {
                if (nums[i] > minHeap.peek()) {
                    minHeap.poll();
                    minHeap.add(nums[i]);
                }
            }
            // the heap has the top 'K' numbers.

## 13. K-way Merge Pattern 🔝🚗🚙 ->

    ❓ MERGE K SORTED ARRAYS OR MERGE K SORTED LISTS
    🥚 Merge K Sorted Lists, Kth Smallest Number in M Sorted Lists, Kth Smallest Number in a Sorted Matrix, etc.
        🔝
        🎭 PsuendoCode K-way Merge Pattern
          ⏰: O(nlogk) 🪐: O(k)
         PriorityQueue<Node> minHeap = new PriorityQueue<>((n1, n2) -> n1.element - n2.element));
                  for (List<Integer> list : lists)             
                  minHeap.add(new Node(list.get(0), 0, list));
                  while (!minHeap.isEmpty()) {
                      Node node = minHeap.poll();
                      result.add(node.element);
                      if (node.index < node.list.size() - 1) {
                          node.index++;
                          node.element = node.list.get(node.index);
                          minHeap.add(node);
                      }
                  }

## 14. Topological Sort Pattern 📅 ->
    ❓  FIND ORDER OF TASKS OR IF GIVEN SEQUENCE IS VALID
    🥚 Tasks Scheduling, Tasks Scheduling Order, All Tasks Scheduling Orders, etc.

      🎭 PsuendoCode Topological Sort Pattern  📅
        ⏰: O(V + E) 🪐: O(V + E)

          PriorityQueue<Integer> sources = new PriorityQu
          for (i = 0; i < inDegree.length; i++)             
          if (inDegree[i] == 0)  sources.add(i);
          while (!sources.isEmpty()) {
              vertex = sources.poll();
              sortedOrder.add(vertex);
              List<Integer> children = graph.get(vertex); // get the node's children to decrement their in-degrees
              for (child : children) {
                  inDegree[child]--;
                  if (inDegree[child] == 0) sources.add(child);
              }
          }

    
## Other Patterns

## Union Find Algorithm Pattern ♾ ->
    ❓ # OF CONNECTED COMPONENETS IN UNDIRECTED GRAPH, FIND IF 2 NODES CONNECTED
    🥚 Number of Connected Components in an Undirected Graph, Find whether two nodes are connected in an undirected graph, etc.

      🎭 PsuendoCode Union Find Algorithm Pattern ♾
          ⏰: O(V * logV) 🪐: O
                  public find(int[] parent, i) {
                      if (parent[i] == -1) return i;
                      return find(parent, parent[i]);
            
                  public void union(int[] parent, x, y) {
                      xset = find(parent, x);
                      yset = find(parent, y);
                      parent[xset] = yset;
                  }
## Greedy Pattern 💰 ->
      ❓ MINIMUM # OF MEETINGS MAX OF INTERVALS NOT OVERLAPPING
      🥚 Activity Selection Problem, Coin Change, Fractional Knapsack Problem, Job Sequencing Problem, Huffman Coding, Prim's Minimum Spanning Tree, Kruskal's Minimum Spanning Tree, Dijkstra's Shortest Path Algorithm, Bellman-Ford Algorithm, Floyd-Warshall Algorithm, Travelling Salesman Problem

      🎭 PsuendoCode Greedy Pattern 💰
        ⏰: O(nlogn) 🪐: O(1)
  
              Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
              count = 0, end = Integer.MIN_VALUE;
              for (int[] interval : intervals) {
                  if (interval[0] >= end) {
                      count++;
                      end = interval[1];
                  }
              }
              return count;

## Backtracking Pattern 🎲 ->
      ❓ FIND ALL PERMUTATIONS COMBINATIONS SUBSETS PARTIONING 
      🥚 N-Queens Problem, Sudoku Solver, Rat in a Maze, Knight's Tour Problem, Hamiltonian Cycle, Subset Sum Problem, Permutations, Combination Sum, Palindrome Partitioning, Word Break Problem, etc.

      🎭 PsuendoCode Backtracking Pattern 🎲
        ⏰: O(n!) 🪐: O(n)
  
              public void backtrack(n, ArrayList<Integer> nums, List<List<Integer>> output, first) {
                  // if all integers are used up
                  if (first == n)
                      output.add(new ArrayList<Integer>(nums));
                  for (i = first; i < n; i++) {
                      // place i-th integer first 
                      // in the current permutation
                      Collections.swap(nums, first, i);
                      // use next integers to complete the permutations
                      backtrack(n, nums, output, first + 1);
                      // backtrack
                      Collections.swap(nums, first, i);
                  }

## Dynamic Programming Pattern 📈 ->
      ❓ FIND OPTIMAL SOLUTION TO COMPLEX PROBLEMS MIN MAX OR COUNT OF GIVEN CONSTRAINTS
      🥚 Fibonacci Numbers, House Thief, Minimum Coin Change, House Painters, Palindromic Subsequence, Longest Common Subsequence, Longest Increasing Subsequence, Longest Common Substring, Edit Distance, 0/1 Knapsack Problem, Subset Sum Problem, Unbounded Knapsack Problem, Rod Cutting, Word Break Problem, etc.

      🎭 PsuendoCode Dynamic Programming Pattern 📈
        ⏰: O(n) 🪐: O(n)
  
              int[] dp = new int[n + 1];
              dp[0] = 1;
              dp[1] = 1;
              for (i = 2; i <= n; i++)
                  dp[i] = dp[i - 1] + dp[i - 2];
              return dp[n];

## Array
## [Two Sum](https://leetcode.com/problems/two-sum/) #1 

        Pattern: Two Pointers Pattern.
        Problem: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
        Example: Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1].
        
        🐢 Solution: Brute Force ⏰: O(N^2) 🪐: O(1)
        🐇 Solution:  Two Pointers Pattern ⏰: O(NlogN) 🪐: O(1)

        var twoSum = function(nums, target) {
            var twoSum = function(nums, target) {
            let checkSum = new Map();
            for(let i=0; i<nums.length; i++){
            var curr = nums[i];
            let diff = target-nums[i];
            if(checkSum.get(diff)){
                if(checkSum.get(diff)[0] === curr) {
                 return [checkSum.get(diff)[1], i ];
                } 
            } else {
            checkSum.set(nums[i], [diff, i]);
            }
        }
            return checkSum
        };

## [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) #121

        Pattern: Dynamic Programming Pattern Kadane's Algorithm
        Problem: You are given an array prices where prices[i] is the price of a given stock on the ith day.
        You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
        Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
        Example: Input: prices = [7,1,5,3,6,4], Output: 5, Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Not 7-1 = 6, as selling price needs to be larger than buying price.
 
        🐢 Solution: Brute Force ⏰: O(N^2) 🪐: O(1)
        🐇 Solution:  Dynamic Programming Pattern Kadane's Algorithm ⏰: O(N) 🪐: O(1)

        var maxProfit = function(prices) {
            let min = prices[0];
            let max = 0;
            for(let i=1; i<prices.length; i++){
                if(prices[i] < min){
                    min = prices[i];
                } else {
                    max = Math.max(max, prices[i]-min);
                }
            }
            return max;
        };

## [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)

        Pattern: Two Pointers Pattern
        Problem : Given Arr [] of int. Return true if has duplicates  : 
        Parameters: Ex 1: Input: nums = [1,2,3,1] Output: true. Ex 2: Input: nums = [1,2,3,4] Output: false. 
         
        🐢 Solution: Brute Force ⏰: O(N^2) 🪐: O(1)
        🐇 Solution:  Two Pointers Pattern  ⏰: O(N) 🪐: O(1)


        var containsDuplicate = function(nums) {
            let checkSum = new Map();
            for(let i=0; i<nums.length; i++){
                if(checkSum.get(nums[i])){
                    return true;
                } else {
                    checkSum.set(nums[i], 1);
                }
            }
            return false;
        };

        var containsDuplicate = function(nums) {
            return [...new Set(nums)].length !== nums.length;
        };  

## [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) #238
        Pattern: Two Pointers Pattern
        Problem: Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
        The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
        You must write an algorithm that runs in O(n) time and without using the division operation.
        Example: Input: nums = [1,2,3,4], Output: [24,12,8,6]
        
        🐢 Solution: Brute Force ⏰: O(N^2) 🪐: O(1)
        🐇 Solution:  Two Pointers Pattern ⏰: O(N) 🪐: O(1)
        
        var productExceptSelf = function(nums) {
            let result = [];
            let left = 1;
            let right = 1;
            for(let i=0; i<nums.length; i++){
                result[i] = left;
                left *= nums[i];
            }
            for(let i=nums.length-1; i>=0; i--){
                result[i] *= right;
                right *= nums[i];
            }
            return result;
        };

## [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) #53

        Pattern: Dynamic Programming Pattern Kadane's Algorithm
        Problem: Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
        Example: Input: nums = [-2,1,-3,4,-1,2,1,-5,4], Output: 6, Explanation: [4,-1,2,1] has the largest sum = 6.
        
        🐢 Solution: Brute Force ⏰:
        🐇 Solution: 🐢 Solution: Brute Force ⏰: O(N^2) 🪐: O(1)
        🐇 Solution:  Dynamic Programming Pattern Kadane's Algorithm ⏰: O(N) 🪐: O(1)

        var maxSubArray = function(nums) {
            let max = nums[0];
            let curr = nums[0];
            for(let i=1; i<nums.length; i++){
                curr = Math.max(nums[i], curr+nums[i]);
                max = Math.max(max, curr);
            }
            return max;
        };

## [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) #152

        Pattern: Dynamic Programming Pattern Kadane's Algorithm
        Problem: Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
        It is guaranteed that the answer will fit in a 32-bit integer.
        A subarray is a contiguous subsequence of the array.
        Example: Input: nums = [2,3,-2,4], Output: 6, Explanation: [2,3] has the largest product 6.
       
       🐢 Solution: Brute Force ⏰: O(N^2) 🪐: O(1)
       🐇 Solution: Dynamic Programming Pattern Kadane's Algorithm ⏰: O(N) 🪐: O(1)

        var maxProduct = function(nums) {
            let max = nums[0];
            let min = nums[0];
            let result = nums[0];
            for(let i=1; i<nums.length; i++){
                let temp = max;
                max = Math.max(nums[i], Math.max(max*nums[i], min*nums[i]));
                min = Math.min(nums[i], Math.min(temp*nums[i], min*nums[i]));
                result = Math.max(result, max);
            }
            return result;
        };
## [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) #153

        Pattern: Binary Search Pattern
        Problem: Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
        [4,5,6,7,0,1,2] if it was rotated 4 times.
        [0,1,2,4,5,6,7] if it was rotated 7 times.
        Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
        Given the sorted rotated array nums of unique elements, return the minimum element of this array.
        Example: Input: nums = [3,4,5,1,2], Output: 1

        🐢 Solution: Brute Force  ⏰: O(N) 🪐: O(1)
        🐇 Solution:  Binary Search Pattern ⏰: O(logN) 🪐: O(1)

        Pattern: Binary Search
        var findMin = function(nums) {
            let left = 0;
            let right = nums.length-1;
            while(left < right){
                let mid = Math.floor((left+right)/2);
                if(nums[mid] > nums[right]){
                    left = mid+1;
                } else {
                    right = mid;
                }
            }
            return nums[left];
        };
## [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) #153

        Pattern: Binary Search
        Problem: Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
        [4,5,6,7,0,1,2] if it was rotated 4 times.
        [0,1,2,4,5,6,7] if it was rotated 7 times.
        Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
        Given the sorted rotated array nums of unique elements, return the minimum element of this array.
        Example: Input: nums = [3,4,5,1,2], Output: 1

        🐢 Solution: Brute Force  ⏰: O(N) 🪐: O(1)
        🐇 Solution:  Binary Search ⏰: O(logN) 🪐: O(1)

        var findMin = function(nums) {
            let left = 0;
            let right = nums.length-1;
            while(left < right){
                let mid = Math.floor((left+right)/2);
                if(nums[mid] > nums[right]){
                    left = mid+1;
                } else {
                    right = mid;
                }
            }
            return nums[left];
        };
## [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/) #33

        Pattern: Binary Search
        Problem: You are given an integer array nums sorted in ascending order, and an integer target.
        Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
        If target is found in the array return its index, otherwise, return -1.
        Example: Input: nums = [4,5,6,7,0,1,2], target = 0, Output: 4

          🐢 Solution: Brute Force ⏰: O(N) 🪐: O(1)
          🐇 Solution: Binary Search ⏰: O(logn) 🪐: O(1)   
          
        var search = function(nums, target) {
            let left = 0;
            let right = nums.length-1;
            while(left <= right){
                let mid = Math.floor((left+right)/2);
                if(nums[mid] === target){
                    return mid;
                } else if(nums[mid] >= nums[left]){
                    if(target >= nums[left] && target < nums[mid]){
                        right = mid-1;
                    } else {
                        left = mid+1;
                    }
                } else {
                    if(target > nums[mid] && target <= nums[right]){
                        left = mid+1;
                    } else {
                        right = mid-1;
                    }
                }
            }
            return -1;
        };
## [3Sum](https://leetcode.com/problems/3sum/) #15

        Pattern: Two Pointers
        Problem: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
        Notice that the solution set must not contain duplicate triplets.
        Example: Input: nums = [-1,0,1,2,-1,-4], Output: [[-1,-1,2],[-1,0,1]]

        🐢 Solution: Brute Force ⏰: O(N^3)   🪐: O(1)
        🐇 Solution:  Two Pointers  ⏰: O(N^2)   🪐: O(N)

        var threeSum = function(nums) {
            let result = [];
            nums.sort((a,b) => a-b);
            for(let i=0; i<nums.length-2; i++){
                if(i > 0 && nums[i] === nums[i-1]) continue;
                let left = i+1;
                let right = nums.length-1;
                while(left < right){
                    let sum = nums[i] + nums[left] + nums[right];
                    if(sum === 0){
                        result.push([nums[i], nums[left], nums[right]]);
                        while(left < right && nums[left] === nums[left+1]) left++;
                        while(left < right && nums[right] === nums[right-1]) right--;
                        left++;
                        right--;
                    } else if(sum < 0){
                        left++;
                    } else {
                        right--;
                    }
                }
            }
            return result;
        };
## [Container With Most Water](https://leetcode.com/problems/container-with-most-water/) #11

        Pattern: Two Pointers Pattern
        Problem: Given n non-negative integers a1, a2, ..., an , where each represents a poat coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
        Notice that you may not slant the container.
        Example: Input: height = [1,8,6,2,5,4,8,3,7], Output: 49

        🐢 Solution: Brute Force ⏰: O(n^2) 🪐: O(1)
        🐇 Solution:  Two Pointers ⏰: O(n) 🪐: O(1)

        var maxArea = function(height) {
            let left = 0;
            let right = height.length-1;
            let max = 0;
            while(left < right){
                let area = Math.min(height[left], height[right]) * (right-left);
                max = Math.max(max, area);
                if(height[left] < height[right]){
                    left++;
                } else {
                    right--;
                }
            }
            return max;
        };

---

## Binary

## [Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/)

      Pattern Used: Bit Manipulation
      Problem: Given two integers a and b, return the sum of the two integers without using the operators + and -.
      🥚: #1 Input: a = 1, b = 2. Output: 3 #2 Input: a = 2, b = 3 Output: 5.
        
        🐢 Solution: Brute Force ⏰:
        🐇 Solution:  🐢 Solution: Brute Force ⏰: O(N) 🪐: O(1)
            🐇 Solution: Bit Manipulation ⏰: O(1)  🪐: O(1)

            var getSum = function(a, b) {
                let carry; // store carry 
                while(a!==0){
                    carry = a & b;
                    b = a ^ b;
                    a = carry << 1;
                }
                return b  
            };
## [Divide Two Integers](https://leetcode.com/problems/divide-two-integers/) #29

      Pattern Used: Bit Manipulation
      Problem: Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
      Return the quotient after dividing dividend by divisor.
      The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.
      Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, assume that your function returns 231 − 1 when the division result overflows.
      Example: Input: dividend = 10, divisor = 3, Output: 3

          🐢 Solution: Brute Force ⏰: O(N) 🪐: O(1)
          🐇 Solution: Bit Manipulation ⏰: O(logn)   🪐: O(logn)

          var divide = function(dividend, divisor) {
              if (dividend === 0 || divisor === 0) return 0
              let isNegative = false;
              let quotient = 0;
              if ((divisor < 0 || dividend < 0) && !(divisor < 0 && dividend < 0)) isNegative = true;
              dividend = Math.abs(dividend)
              divisor = Math.abs(divisor)
              while (dividend >= divisor) {
                  let carry = 1, tempDividend= dividend, tempDivisor = divisor
                  while (tempDivisor <= (tempDividend>> 1)){
                      carry <<= 1
                      tempDividend>>= 1
                      tempDivisor <<= 1
                  }
                  quotient += carry
                  dividend -= tempDivisor
              }
              if (isNegative) return -quotient
              if (quotient >= 2**31) {
                  return 2**31 - 1
              }
              return quotient
          };
## [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/) #191

        Pattern Used: Bit Manipulation
        Problem: Write a function that takes an unsigned integer and returns the number of '1' bits it has (aka Hamming weight).
        🥚: #1 Input: n = 00000000000000000000000000001011 Output: 3 . N as a total of three '1' bits.#2 Input: n = 00000000000000000000000010000000 Output: 1 #3 Input: n = 11111111111111111111111111111101 Output: 31

            🐢 Solution: Brute Force ⏰: O(N) 🪐: O(1)
            🐇 Solution: Bit Manipulation ⏰: O(1) 🪐: O(1)

            var hammingWeight = function(n) {
                let count = 0;
                while(n!=0){
                    n = n&(n-1); //mask<<1
                    count++;
                }
                return count
            };

## [Counting Bits](https://leetcode.com/problems/counting-bits/) #338

        Pattern Used: Bit Manipulation
        Problem: Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
        🥚: #1 Input: n = 2 Output: [0,1,1]  Explain: 0 --> 0 1 --> 1 2 --> 10 #2 Input: n = 5 Output: [0,1,1,2,1,2]

            🐢 Solution: Brute Force ⏰: O(N) 🪐: O(1)
            🐇 Solution: Bit Manipulation ⏰: O(N) 🪐: O(1)

            var countBits = function(n) {
                let result = [0];
                for(let i = 1; i <= n; i++){
                    result.push(result[i>>1] + (i&1));
                }
                return result;
            };
            
            🐢 Solution: Brute Force ⏰: O(N) 🪐: O(N)
            🐇 Solution: Bit Manipulation  ⏰: O(n)  🪐: O(n)

            const countBits = (n) => {
                const res = new Array(n);
                res[0] = 0;

                for (let i = 1; i <= n; i++) {
                    if (i % 2 === 0) res[i] = res[i / 2];
                    else res[i] = res[i - 1] + 1;
                }

                return res;
            };
## [Missing Number](https://leetcode.com/problems/missing-number/) #268

        Problem: Given an [] containing n distinct numbers in the range [0, n], return the only num in the range tht missing from the []
        🥚: #1 Input: nums = [3,0,1] Output: 2 Explain: n = 3 since there are 3 num, so all n are in range [0,3]. 2 is the missing num in the range it does not appear in nums. #2 Input: nums = [0,1] Output: 2 #3 Input: nums = [9,6,4,2,3,5,7,0,1] Output: 8

            🐢 Solution: Brute Force ⏰: O(N) 🪐: O(N)
            🐇 Solution: Bit Manipulation  ⏰: O(n)  🪐: O(n)

            var missingNumber = function (nums) {
              let i = 0;
              let temp = 0;
              while (i < nums.length) {
                if (nums[i] != i && nums.length > nums[i]) {
                  temp = nums[nums[i]];
                  nums[nums[i]] = nums[i];
                  nums[i] = temp;
                } else {
                  i++;
                }
              }

              for (let i = 0; i < nums.length; i++) {
                if (i != nums[i]) return i;
              }

              return nums.length;
            };

## [Reverse Bits](https://leetcode.com/problems/reverse-bits/) #190

        Pattern Used: Bit Manipulation
        Problem: Reverse bits of a given 32 bits unsigned integer.
        🥚: #1 Input: n = 00000010100101000001111010011100 Output: 964176192 (00111001011110000010100101000000)
        Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000. #2 Input: n = 11111111111111111111111111111101
        Output:   3221225471 (10111111111111111111111111111111)

            🐢 Solution: Brute Force ⏰: O(N) 🪐: O(1)
            🐇 Solution: Bit Manipulation ⏰: O(1)  🪐: O(1)

            var reverseBits = function (n) {
              var len = 32;
              var arr = new Array();
              while (len > 0) {
                var t = n & 1;
                n = n >> 1;
                arr.push(t);
                len--;
              }
              var res = arr.join("");
              return parseInt(res, 2);
            };

## Dynamic Programming

## [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/) #70

        Pattern Used: Dynamic Programming
        Problem: You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
        🥚: #1 Input: n = 2 Output: 2. Explanation: There are two ways to climb to the top. 1. 1 step + 1 step 2. 2 steps
        #2 Input: n = 3 Output: 3. Explanation: There are three ways to climb to the top. 1. 1 step + 1 step + 1 step 2. 1 step + 2 steps 3. 2 steps + 1 step

        🐢 Solution: Brute Force ⏰: O(2^n) 🪐: O(n)
        🐇 Solution:  Dynamic Programming Memoization  ⏰: O(n) 🪐: O(n)

            var climbStairs = function (n) {
              if (n == 1) return 1;
              if (n == 2) return 2;
              let dp = new Array(n + 1); // ways to climb array
              dp[1] = 1;
              dp[2] = 2;
              for (let i = 3; i <= n; i++) { //Either climb 1 stair and then climb the rest i-1 stairs X ways.
                dp[i] = dp[i - 1] + dp[i - 2]; //- Or climb 2 stairs at once and then climb the rest i-2 stairs Y ways.
              }                                  //Total: X + Y ways
              return dp[n]; 
            };
## [Coin Change](https://leetcode.com/problems/coin-change/) #322


        Problem: You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
        🥚: #1 Input: coins = [1,2,5], amount = 11 Output: 3 Explanation: 11 = 5 + 5 + 1
        #2 Input: coins = [2], amount = 3 Output: -1
        #3 Input: coins = [1], amount = 0 Output: 0
        
        🐢 Solution: Brute Force ⏰: O(n^amount) 🪐: O(amount)
        🐇 Solution:  Dynamic Programming Memoization  ⏰: O(n^amount) 🪐: O(n^amount)   

            var coinChange = function (coins, amount) {
              let dp = new Array(amount + 1).fill(amount + 1);
              dp[0] = 0;
              for (let i = 1; i <= amount; i++) {
                for (let j = 0; j < coins.length; j++) {
                  if (coins[j] <= i) {
                    dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
                  }
                }
              }
              return dp[amount] > amount ? -1 : dp[amount];
            };
## [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/) #300

        Problem: Given an integer array nums, return the length of the longest strictly increasing subsequence.
        🥚: #1 Input: nums = [10,9,2,5,3,7,101,18] Output: 4 Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. #2 Input: nums = [0,1,0,3,2,3] Output: 4 #3 Input: nums = [7,7,7,7,7,7,7] Output: 1

        🐢 Solution: Brute Force ⏰: O(2^n) 🪐: O(n)
        🐇 Solution:  Dynamic Programming Memoization  ⏰: O(n^2) 🪐: O(n^2)        

            var lengthOfLIS = function (nums) {
              let dp = new Array(nums.length).fill(1);
              let max = 1;
              for (let i = 1; i < nums.length; i++) {
                for (let j = 0; j < i; j++) {
                  if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                    max = Math.max(max, dp[i]);
                  }
                }
              }
              return max;
            };

## [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/) #1143
       
        Pattern Used: Dynamic Programming
        Problem: Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0. A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.
        🥚: #1 Input: text1 = "abcde", text2 = "ace" Output: 3 Explanation: The longest common subsequence is "ace" and its length is 3. #2 Input: text1 = "abc", text2 = "abc" Output: 3 #3 Input: text1 = "abc", text2 = "def" Output: 0

        🐢 Solution: Brute Force ⏰: O(2^n) 🪐: O(n)
        🐇 Solution:  Dynamic Programming Memoization  ⏰: O(m*n) 🪐: O(m*n)

        Pattern Used: Memoization

            var longestCommonSubsequence = function (text1, text2) {
              let dp = new Array(text1.length + 1)
                .fill(0)
                .map(() => new Array(text2.length + 1).fill(0));
              for (let i = 1; i <= text1.length; i++) {
                for (let j = 1; j <= text2.length; j++) {
                  if (text1[i - 1] == text2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                  } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                  }
                }
              }
              return dp[text1.length][text2.length];
            };
## [Word Break Problem](https://leetcode.com/problems/word-break/)

        Problem: Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words. Note that the same word in the dictionary may be reused multiple times in the segmentation.
        🥚: #1 Input: s = "leetcode", wordDict = ["leet","code"] Output: true Explanation: Return true because "leetcode" can be segmented as "leet code". #2 Input: s = "applepenapple", wordDict = ["apple","pen"] Output: true Explanation: Return true because "applepenapple" can be segmented as "apple pen apple". Note that you are allowed to reuse a dictionary word. #3 Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"] Output: false

        🐢 Solution: Brute Force ⏰: O(2^n) 🪐: O(n)
        🐇 Solution:  Dynamic Programming Memoization  ⏰: O(n^2) 🪐: O(n^2)

            var wordBreak = function (s, wordDict) {
              let dp = new Array(s.length + 1).fill(false);
              dp[0] = true;
              for (let i = 1; i <= s.length; i++) {
                for (let j = 0; j < i; j++) {
                  if (dp[j] && wordDict.includes(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                  }
                }
              }
              return dp[s.length];
            };
## [Combination Sum](https://leetcode.com/problems/combination-sum-iv/) #377

        Problem: Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target. Example: Input: nums = [1, 2, 3] target = 4 Output: 7 Explanation: The possible combination ways are: (1, 1, 1, 1) (1, 1, 2) (1, 2, 1) (1, 3) (2, 1, 1) (2, 2) (3, 1) Note that different sequences are counted as different combinations. Therefore the output is 7.
        
        🐢 Solution: Brute Force ⏰:
        🐇 Solution: 🐢 Solution: Brute Force ⏰: O(2^n) 🪐: O(n)
        🐇 Solution:  Dynamic Programming Memoization  ⏰: O(n*target) 🪐:  O(n*target)

            var combinationSum4 = function (nums, target) {
              let dp = new Array(target + 1).fill(0);
              dp[0] = 1;
              for (let i = 1; i <= target; i++) {
                for (let j = 0; j < nums.length; j++) {
                  if (nums[j] <= i) {
                    dp[i] += dp[i - nums[j]];
                  }
                }
              }
              return dp[target];
            };

            
## [House Robber](https://leetcode.com/problems/house-robber/) #198

        Problem: You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constrastopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
        🥚: #1 Input: nums = [1,2,3,1] Output: 4 Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4. #2 Input: nums = [2,7,9,3,1] Output: 12 Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). Total amount you can rob = 2 + 9 + 1 = 12.
        
        🐢 Solution: Brute Force ⏰:
        🐇 Solution: 🐢 Solution: Brute Force ⏰: O(2^n) 🪐: O(n)
        🐇 Solution:  Dynamic Programming Memoization  ⏰: O(n) 🪐: O(n)

            var rob = function (nums) {
              let dp = new Array(nums.length + 1).fill(0);
              dp[0] = 0;
              dp[1] = nums[0];
              for (let i = 2; i <= nums.length; i++) {
                dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
              }
              return dp[nums.length];
            };
## [House Robber II](https://leetcode.com/problems/house-robber-ii/) #213

        Problem: You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
        🥚: #1 Input: nums = [2,3,2] Output: 3 Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses. #2 Input: nums = [1,2,3,1] Output: 4 Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4. #3 Input: nums = [0] Output: 0

        🐢 Solution: Brute Force ⏰: O(2^n) 🪐: O(n)
        🐇 Solution:  Dynamic Programming Memoization  ⏰: O(n) 🪐: O(n)

        Pattern Used: Memoization

            var rob = function (nums) {
              if (nums.length == 1) return nums[0];
              return Math.max(
                robRange(nums, 0, nums.length - 2),
                robRange(nums, 1, nums.length - 1)
              );
            };
            var robRange = function (nums, start, end) {
              let dp = new Array(nums.length + 1).fill(0);
              dp[start] = nums[start];
              dp[start + 1] = Math.max(nums[start], nums[start + 1]);
              for (let i = start + 2; i <= end; i++) {
                dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
              }
              return dp[end];
            };
## [Decode Ways](https://leetcode.com/problems/decode-ways/) #91

        Problem: A message containing letters from A-Z is being encoded to numbers using the following mapping: 'A' -> 1 'B' -> 2 ... 'Z' -> 26 Given a non-empty string s containing only digits, determine the total number of ways to decode it. The answer is guaranteed to fit in a 32-bit integer.
        🥚: #1 Input: s = "12" Output: 2 Explanation: It could be decoded as "AB" (1 2) or "L" (12). #2 Input: s = "226" Output: 3 Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6). #3 Input: s = "0" Output: 0 Explanation: There is no character that is mapped to a number starting with 0. The only valid mappings with 0 are 'J' -> "10" and 'T' -> "20", neither of which start with 0. Hence, there are no valid ways to decode this since all digits need to be mapped. #4 Input: s = "1" Output: 1

        🐢 Solution: Brute Force ⏰: O(2^n) 🪐: O(n)
        🐇 Solution:  Dynamic Programming Memoization  ⏰: O(n) 🪐: O(n)

            var numDecodings = function (s) {
              if (s[0] == "0") return 0;
              let dp = new Array(s.length + 1).fill(0);
              dp[0] = 1;
              dp[1] = 1;
              for (let i = 2; i <= s.length; i++) {
                let first = parseInt(s.substring(i - 1, i));
                let second = parseInt(s.substring(i - 2, i));
                if (first >= 1 && first <= 9) {
                  dp[i] += dp[i - 1];
                }
                if (second >= 10 && second <= 26) {
                  dp[i] += dp[i - 2];
                }
              }
              return dp[s.length];
            };
## [Unique Paths](https://leetcode.com/problems/unique-paths/) #62

        Problem: A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below). The robot can only move either down or right at any poin time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below). How many possible unique paths are there?
        🥚: #1 Input: m = 3, n = 7 Output: 28 #2 Input: m = 3, n = 2 Output: 3 Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner: 1. Right -> Down -> Down 2. Down -> Down -> Right 3. Down -> Right -> Down #3 Input: m = 7, n = 3 Output: 28 #4 Input: m = 3, n = 3 Output: 6

        🐢 Solution: Brute Force ⏰: O(2^n) 🪐: O(n)
        🐇 Solution:  Dynamic Programming Memoization ⏰: O(n) 🪐: O(n)

            var uniquePaths = function (m, n) {
              let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
              for (let i = 0; i < m; i++) {
                dp[i][0] = 1;
              }
              for (let j = 0; j < n; j++) {
                dp[0][j] = 1;
              }
              for (let i = 1; i < m; i++) {
                for (let j = 1; j < n; j++) {
                  dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
                }
              }
              return dp[m - 1][n - 1];
            };
## [Jump Game](https://leetcode.com/problems/jump-game/) #55

        Problem: Given an array of non-negative integers nums, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Determine if you are able to reach the last index.
        🥚: #1 Input: nums = [2,3,1,1,4] Output: true Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index. #2 Input: nums = [3,2,1,0,4] Output: false Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
        
        🐢 Solution: Brute Force ⏰:
        🐇 Solution: 🐢 Solution: Brute Force ⏰: O(2^n) 🪐: O(n)
        🐇 Solution:  Dynamic Programming Tabulation ⏰: O(n) 🪐: O(n)

            var canJump = function (nums) {
              let dp = new Array(nums.length).fill(false);
              dp[0] = true;
              for (let i = 1; i < nums.length; i++) {
                for (let j = 0; j < i; j++) {
                  if (dp[j] && j + nums[j] >= i) {
                    dp[i] = true;
                    break;
                  }
                }
              }
              return dp[nums.length - 1];
            };

---

## Graph

## [Clone Graph](https://leetcode.com/problems/clone-graph/) #133

       Pattern Used: BFS Pattern:
       Problem: Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph. Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.
       🥚: #1 Input: adjList = [[2,4],[1,3],[2,4],[1,3]] Output: [[2,4],[1,3],[2,4],[1,3]] Explanation: There are 4 nodes in the graph. #2 Input: adjList = [[]] Output: [[]] #3 Input: adjList = [] Output: [] #4 Input: adjList = [[2],[1]] Output: [[2],[1]]

              🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
              🐇 Solution: BFS ⏰: O(n) 🪐: O(n)

              var cloneGraph = function (node) {
                 if (!node) return node;
                 let map = new Map();
                 let clone = new Node(node.val, []);
                 map.set(node, clone);
                 let queue = [node];
                 while (queue.length) {
                let n = queue.shift();
                for (let neighbor of n.neighbors) {
                  if (!map.has(neighbor)) {
                     map.set(neighbor, new Node(neighbor.val, []));
                     queue.push(neighbor);
                  }
                  map.get(n).neighbors.push(map.get(neighbor));
                }
                 }
                 return clone;
              };

## [Course Schedule](https://leetcode.com/problems/course-schedule/) #207

        Pattern Used : Topological Sort
        Problem: There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1. Return true if you can finish all courses. Otherwise, return false.
        🥚: #1 Input: numCourses = 2, prerequisites = [[1,0]] Output: true Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible. #2 Input: numCourses = 2, prerequisites = [[1,0],[0,1]] Output: false Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
          
          🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
          🐇 Solution: Topological Sort  ⏰: O(V+E)   🪐: O(V+E) 

            var canFinish = function (numCourses, prerequisites) {
              let graph = new Map();
              let indegree = new Array(numCourses).fill(0);
              for (let [course, pre] of prerequisites) {
                if (!graph.has(pre)) graph.set(pre, []);
                graph.get(pre).push(course);
                indegree[course]++;
              }
              let queue = [];
              for (let i = 0; i < indegree.length; i++) {
                if (indegree[i] == 0) queue.push(i);
              }
              let count = 0;
              while (queue.length) {
                let course = queue.shift();
                count++;
                if (graph.has(course)) {
                  for (let next of graph.get(course)) {
                    indegree[next]--;
                    if (indegree[next] == 0) queue.push(next);
                  }
                }
              }
              return count == numCourses;
            };

## [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/) #417
        Pattern Used: BFS Pattern
        Problem: Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges. Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower. Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.
        🥚: #1 Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]] Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]] Explanation: Pacific ~ ~ ~ ~ ~ 1 2 2 3 (5) ~ 3 2 3 (4) (4) ~ 2 4 (5) 3 1 ~ (6) (7) 1 4 5 ~ (5) 1 1 2 4 ~ ~ ~ ~ ~ Atlantic #2 Input: heights = [[2,1],[1,2]] Output: [[0,0],[0,1],[1,0],[1,1]]

            🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
            🐇 Solution: BFS ⏰: O(n) 🪐: O(n)

            var pacificAtlantic = function (heights) {
              let m = heights.length;
              let n = heights[0].length;
              let pacific = new Array(m).fill(0).map(() => new Array(n).fill(false));
              let atlantic = new Array(m).fill(0).map(() => new Array(n).fill(false));
              let queue = [];
              for (let i = 0; i < m; i++) {
                queue.push([i, 0]);
                pacific[i][0] = true;
              }
              for (let i = 0; i < n; i++) {
                queue.push([0, i]);
                pacific[0][i] = true;
              }
              bfs(heights, pacific, queue);
              queue = [];
              for (let i = 0; i < m; i++) {
                queue.push([i, n - 1]);
                atlantic[i][n - 1] = true;
              }
              for (let i = 0; i < n; i++) {
                queue.push([m - 1, i]);
                atlantic[m - 1][i] = true;
              }
              bfs(heights, atlantic, queue);
              let res = [];
              for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                  if (pacific[i][j] && atlantic[i][j]) res.push([i, j]);
                }
              }
              return res;
            };

            function bfs(heights, ocean, queue) {
              let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
              while (queue.length) {
                let [i, j] = queue.shift();
                for (let dir of dirs) {
                  let x = i + dir[0];
                  let y = j + dir[1];
                  if (
                    x >= 0 &&
                    x < heights.length &&
                    y >= 0 &&
                    y < heights[0].length &&
                    !ocean[x][y]
                  ) {
                    if (heights[x][y] >= heights[i][j]) {
                      ocean[x][y] = true;
                      queue.push([x, y]);
                    }
                  }
                }
              }
            }


                
## [Number of Islands](https://leetcode.com/problems/number-of-islands/) #200

        Pattern Used: BFS Pattern DFS Pattern Union Find Pattern
        Problem: Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
        🥚: #1 Input: grid = [ ["1","1","1","1","0"], ["1","1","0","1","0"], ["1","1","0","0","0"], ["0","0","0","0","0"] ] Output: 1 #2 Input: grid = [ ["1","1","0","0","0"], ["1","1","0","0","0"], ["0","0","1","0","0"], ["0","0","0","1","1"] ] Output: 3
       
        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution:  BFS  ⏰: O(mn) 🪐: O(mn)

            var numIslands = function (grid) {
              let m = grid.length;
              let n = grid[0].length;
              let count = 0;
              let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
              for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                  if (grid[i][j] == "1") {
                    count++;
                    grid[i][j] = "0";
                    let queue = [[i, j]];
                    while (queue.length) {
                      let [x, y] = queue.shift();
                      for (let dir of dirs) {
                        let a = x + dir[0];
                        let b = y + dir[1];
                        if (
                          a >= 0 &&
                          a < m &&
                          b >= 0 &&
                          b < n &&
                          grid[a][b] == "1"
                        ) {
                          grid[a][b] = "0";
                          queue.push([a, b]);
                        }
                      }
                    }
                  }
                }
              }
              return count;
            };
## [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/) #128
        Pattern Used: Union Find Pattern
        Problem: Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.
        🥚: #1 Input: nums = [100,4,200,1,3,2] Output: 4 Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4. #2 Input: nums = [0,3,7,2,5,8,4,6,0,1] Output: 9

         🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
         🐇 Solution: Union Find  ⏰: O(n) 🪐: O(n)

            var longestConsecutive = function (nums) {
              let set = new Set(nums);
              let max = 0;
              for (let num of set) {
                if (!set.has(num - 1)) {
                  let curr = num;
                  let count = 1;
                  while (set.has(curr + 1)) {
                    curr++;
                    count++;
                  }
                  max = Math.max(max, count);
                }
              }
              return max;
            };

## Interval

## [Insert Interval](https://leetcode.com/problems/insert-interval/) #57

        Pattern Used: Merge Intervals Pattern
        Problem: Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary). You may assume that the intervals were initially sorted according to their start times.
        🥚: #1 Input: intervals = [[1,3],[6,9]], newInterval = [2,5] Output: [[1,5],[6,9]] #2 Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8] Output: [[1,2],[3,10],[12,16]] Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
        
          🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
          🐇 Solution: Merge Intervals  ⏰: O(n) 🪐: O(n)
  
              var insert = function (intervals, newInterval) {
                let res = [];
                let i = 0;
                while (i < intervals.length && intervals[i][1] < newInterval[0]) {
                  res.push(intervals[i]);
                  i++;
                }
                while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
                  newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
                  newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
                  i++;
                }
                res.push(newInterval);
                while (i < intervals.length) {
                  res.push(intervals[i]);
                  i++;
                }
                return res;
              };
## [Merge Intervals](https://leetcode.com/problems/merge-intervals/) #56

        Pattern Used: Merge Intervals Pattern Greedy
        Problem: Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
        🥚: #1 Input: intervals = [[1,3],[2,6],[8,10],[15,18]] Output: [[1,6],[8,10],[15,18]] Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6]. #2 Input: intervals = [[1,4],[4,5]] Output: [[1,5]] Explanation: Intervals [1,4] and [4,5] are considered overlapping.
        

          🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
          🐇 Solution: Merge Intervals  ⏰: O(n) 🪐: O(n)
  
              var merge = function (intervals) {
                if (intervals.length <= 1) return intervals;
                intervals.sort((a, b) => a[0] - b[0]);
                let res = [intervals[0]];
                for (let i = 1; i < intervals.length; i++) {
                  let curr = intervals[i];
                  let prev = res[res.length - 1];
                  if (curr[0] <= prev[1]) {
                    prev[1] = Math.max(prev[1], curr[1]);
                  } else {
                    res.push(curr);
                  }
                }
                return res;
              };

## [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/) #435

        Pattern Used: Merge Intervals Pattern
        Problem: Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
        🥚: #1 Input: intervals = [[1,2],[2,3],[3,4],[1,3]] Output: 1 Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping. #2 Input: intervals = [[1,2],[1,2],[1,2]] Output: 2 Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping. #3 Input: intervals = [[1,2],[2,3]] Output: 0 Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
        

        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution:   Merge Intervals  ⏰: O(nlogn) 🪐: O(1)

            var eraseOverlapIntervals = function (intervals) {
              if (intervals.length <= 1) return 0;
              intervals.sort((a, b) => a[1] - b[1]);
              let count = 0;
              let prev = intervals[0];
              for (let i = 1; i < intervals.length; i++) {
                let curr = intervals[i];
                if (curr[0] < prev[1]) {
                  count++;
                } else {
                  prev = curr;
                }
              }
              return count;
            };
---

## Linked List

## [Reverse a Linked List](https://leetcode.com/problems/reverse-linked-list/) #206

        Pattern Used: Fast & Slow Pointers Pattern
        Problem: Given the head of a singly linked list, reverse the list, and return the reversed list.
        🥚: #1 Input: head = [1,2,3,4,5] Output: [5,4,3,2,1] #2 Input: head = [1,2] Output: [2,1] #3 Input: head = [] Output: []
        
        🐢 Solution: Brute Force ⏰: Brute Force ⏰:
        🐇 Solution:  Fast & Slow Pointers  ⏰: O(n) 🪐: O(1)

            var reverseList = function (head) {
              let prev = null;
              let curr = head;
              while (curr) {
                let next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
              }
              return prev;
            };
## [Detect Cycle in a Linked List](https://leetcode.com/problems/linked-list-cycle/) #141

        Pattern Used: Fast & Slow Pointers Pattern
        Problem: Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter. Return true if there is a cycle in the linked list. Otherwise, return false.
        🥚: #1 Input: head = [3,2,0,-4], pos = 1 Output: true Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed). #2 Input: head = [1,2], pos = 0 Output: true Explanation: There is a cycle in the linked list, where the tail connects to the 0th node. #3 Input: head = [1], pos = -1 Output: false Explanation: There is no cycle in the linked list.
        
        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution:  Fast & Slow Pointers  ⏰: O(n) 🪐: O(1)

            var hasCycle = function (head) {
              let slow = head;
              let fast = head;
              while (fast && fast.next) {
                slow = slow.next;
                fast = fast.next.next;
                if (slow === fast) return true;
              }
              return false;
            };
## [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/) #21

        Pattern Used: Fast & Slow Pointers Pattern
        Problem: Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
        🥚: #1 Input: l1 = [1,2,4], l2 = [1,3,4] Output: [1,1,2,3,4,4] #2 Input: l1 = [], l2 = [] Output: [] #3 Input: l1 = [], l2 = [0] Output: [0]

        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution:  Fast & Slow Pointers  ⏰: O(n) 🪐: O(1)

            var mergeTwoLists = function (l1, l2) {
              let dummy = new ListNode();
              let curr = dummy;
              while (l1 && l2) {
                if (l1.val < l2.val) {
                  curr.next = l1;
                  l1 = l1.next;
                } else {
                  curr.next = l2;
                  l2 = l2.next;
                }
                curr = curr.next;
              }
              if (l1) curr.next = l1;
              if (l2) curr.next = l2;
              return dummy.next;
            };
## [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) #23

        Pattern Used: Merge Intervals Pattern
        Problem: You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.
        🥚: #1 Input: lists = [[1,4,5],[1,3,4],[2,6]] Output: [1,1,2,3,4,4,5,6] #2 Input: lists = [] Output: [] #3 Input: lists = [[]] Output: []

        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution: Merge Intervals  ⏰: O(nlogn) 🪐: O(1)
        
            var mergeKLists = function (lists) {
              if (lists.length === 0) return null;
              let dummy = new ListNode();
              let curr = dummy;
              let minHeap = new MinHeap();
              for (let i = 0; i < lists.length; i++) {
                if (lists[i]) minHeap.insert(lists[i]);
              }
              while (minHeap.size() > 0) {
                let node = minHeap.remove();
                curr.next = node;
                curr = curr.next;
                if (node.next) minHeap.insert(node.next);
              }
              return dummy.next;
            };
## [Remove Nth Node From End Of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) #19

        Pattern Used: Fast & Slow Pointers Pattern
        Problem: Given the head of a linked list, remove the nth node from the end of the list and return its head.
        🥚: #1 Input: head = [1,2,3,4,5], n = 2 Output: [1,2,3,5] #2 Input: head = [1], n = 1 Output: [] #3 Input: head = [1,2], n = 1 Output: [1]
        
        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution:  Fast & Slow Pointers  ⏰: O(n) 🪐: O(1)

            var removeNthFromEnd = function (head, n) {
              let dummy = new ListNode();
              dummy.next = head;
              let slow = dummy;
              let fast = dummy;
              for (let i = 0; i < n; i++) {
                fast = fast.next;
              }
              while (fast.next) {
                slow = slow.next;
                fast = fast.next;
              }
              slow.next = slow.next.next;
              return dummy.next;
            };
## [Reorder List](https://leetcode.com/problems/reorder-list/) #143

        Pattern Used: Fast & Slow Pointers Pattern
        Problem: Given the head of a singly linked list, reorder the list to be: head -> node 2 -> node 3 -> node 4 -> ... -> node n -> null. You may not modify the values in the list's nodes. Only nodes themselves may be changed.
        🥚: #1 Input: head = [1,2,3,4] Output: [1,4,2,3] #2 Input: head = [1,2,3,4,5] Output: [1,5,2,4,3]

        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution: ⏰: O(n) 🪐: O(1)

            var reorderList = function (head) {
              if (!head) return null;
              let slow = head;
              let fast = head;
              while (fast && fast.next) {
                slow = slow.next;
                fast = fast.next.next;
              }
              let prev = null;
              let curr = slow;
              while (curr) {
                let next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
              }
              let first = head;
              let second = prev;
              while (second.next) {
                let temp = first.next;
                first.next = second;
                first = temp;
                temp = second.next;
                second.next = first;
                second = temp;
              }
            };
---

## Matrix

## [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/) #73

        Pattern Used: Matrix Pattern 
        Problem: Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.
        🥚: #1 Input: matrix = [[1,1,1],[1,0,1],[1,1,1]] Output: [[1,0,1],[0,0,0],[1,0,1]] #2 Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]] Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

        🐢 Solution: Brute Force ⏰: O(mn) 🪐: O(m+n)
        🐇 Solution: Matrix Pattern  ⏰: O(mn) 🪐: O(1)

            var setZeroes = function (matrix) {
              let rows = new Set();
              let cols = new Set();
              for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[0].length; j++) {
                  if (matrix[i][j] === 0) {
                    rows.add(i);
                    cols.add(j);
                  }
                }
              }
              for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[0].length; j++) {
                  if (rows.has(i) || cols.has(j)) {
                    matrix[i][j] = 0;
                  }
                }
              }
            };
## [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/) #54

        Pattern Used: Matrix Pattern
        Problem: Given an m x n matrix, return all elements of the matrix in spiral order.
        🥚: #1 Input: matrix = [[1,2,3],[4,5,6],[7,8,9]] Output: [1,2,3,6,9,8,7,4,5] #2 Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]] Output: [1,2,3,4,8,12,11,10,9,5,6,7]

        🐢 Solution: Brute Force ⏰: O(mn) 🪐: O(mn)
        🐇 Solution:  Matrix Pattern  ⏰: O(mn) 🪐: O(mn)

            var spiralOrder = function (matrix) {
              let result = [];
              let top = 0;
              let bottom = matrix.length - 1;
              let left = 0;
              let right = matrix[0].length - 1;
              while (top <= bottom && left <= right) {
                for (let i = left; i <= right; i++) {
                  result.push(matrix[top][i]);
                }
                top++;
                for (let i = top; i <= bottom; i++) {
                  result.push(matrix[i][right]);
                }
                right--;
                if (top <= bottom) {
                  for (let i = right; i >= left; i--) {
                    result.push(matrix[bottom][i]);
                  }
                  bottom--;
                }
                if (left <= right) {
                  for (let i = bottom; i >= top; i--) {
                    result.push(matrix[i][left]);
                  }
                  left++;
                }
              }
              return result;
            };
## [Rotate Image](https://leetcode.com/problems/rotate-image/) #48

        Pattern Used: Matrix Pattern
        Problem: You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
        🥚: #1 Input: matrix = [[1,2,3],[4,5,6],[7,8,9]] Output: [[7,4,1],[8,5,2],[9,6,3]] #2 Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]] Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
        
        🐢 Solution: Brute Force ⏰: Brute Force ⏰:
        🐇 Solution:  MatrixPattern ⏰: O(n) 🪐: O(1)

            var rotate = function (matrix) {
              let n = matrix.length;
              for (let i = 0; i < n / 2; i++) {
                for (let j = i; j < n - i - 1; j++) {
                  let temp = matrix[i][j];
                  matrix[i][j] = matrix[n - j - 1][i];
                  matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
                  matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
                  matrix[j][n - i - 1] = temp;
                }
              }
            };
## [Word Search](https://leetcode.com/problems/word-search/) #79

        Pattern Used: Backtracking Matrix Pattern
        Problem: Given an m x n grid of characters board and a string word, return true if word exists in the grid.
        🥚: #1 Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED" Output: true #2 Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE" Output: true #3 Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB" Output: false

        🐢 Solution: Brute Force ⏰ O(mn * 4^L) 🪐: O(mn)
        🐇 Solution:  MatrixPattern ⏰: O(n) 🪐: O(n)

            var exist = function (board, word) {
              let m = board.length;
              let n = board[0].length;
              let visited = new Array(m);
              for (let i = 0; i < m; i++) {
                visited[i] = new Array(n).fill(false);
              }
              let dfs = (i, j, k) => {
                if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] || board[i][j] !== word[k]) {
                  return false;
                }
                if (k === word.length - 1) {
                  return true;
                }
                visited[i][j] = true;
                let result =
                  dfs(i + 1, j, k + 1) ||
                  dfs(i - 1, j, k + 1) ||
                  dfs(i, j + 1, k + 1) ||
                  dfs(i, j - 1, k + 1);
                visited[i][j] = false;
                return result;
              };
              for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                  if (dfs(i, j, 0)) {
                    return true;
                  }
                }
              }
              return false;
            };

---

## String

## [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/) #3
        
        Pattern Used: Sliding Window Pattern
        Problem: Given a string s, find the length of the longest substring without repeating characters.
        🥚: #1 Input: s = "abcabcbb" Output: 3 Explanation: The answer is "abc", with the length of 3. #2 Input: s = "bbbbb" Output: 1 Explanation: The answer is "b", with the length of 1. #3 Input: s = "pwwkew" Output: 3 Explanation: The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring. #4 Input: s = "" Output: 0
        
        🐢 Solution: Brute Force ⏰: O(n^3) 🪐: O(min(m, n))  
        🐇 Solution:  Sliding Window Pattern ⏰: O(n) 🪐: O(n)

            var lengthOfLongestSubstring = function (s) {
              let result = 0;
              let left = 0;
              let right = 0;
              let set = new Set();
              while (right < s.length) {
                if (!set.has(s[right])) {
                  set.add(s[right]);
                  right++;
                  result = Math.max(result, set.size);
                } else {
                  set.delete(s[left]);
                  left++;
                }
              }
              return result;
            };
## [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/) #424

        Pattern Used: Sliding Window Pattern
        Problem: You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
        Return the length of the longest substring containing the same letter you can get after performing the above operations.
        🥚: #1 Input: s = "ABAB", k = 2 Output: 4 Explanation: Replace the two 'A's with two 'B's or vice versa. #2 Input: s = "AABABBA", k = 1 Output: 4 Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA". The substring "BBBB" has the longest repeating letters, which is 4.
        
        🐢 Solution: Brute Force ⏰: O(n^2) 🪐: O(1)
        🐇 Solution: Sliding Window Pattern ⏰: O(n) 🪐: O(n)

            var characterReplacement = function (s, k) {
              let left = 0;
              let right = 0;
              let maxCount = 0;
              let map = new Map();
              while (right < s.length) {
                map.set(s[right], (map.get(s[right]) || 0) + 1);
                maxCount = Math.max(maxCount, map.get(s[right]));
                if (right - left + 1 - maxCount > k) {
                  map.set(s[left], map.get(s[left]) - 1);
                  left++;
                }
                right++;
              }
              return right - left;
            };
## [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/) #76

        Pattern Used: Sliding Window Pattern
        Problem: Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
        The testcases will be generated such that the answer is unique.
        A substring is a contiguous sequence of characters within the string.
        🥚: #1 Input: s = "ADOBECODEBANC", t = "ABC" Output: "BANC" Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t. #2 Input: s = "a", t = "a" Output: "a" #3 Input: s = "a", t = "aa" Output: "" Explanation: Both 'a's from t must be included in the window. Since the largest window of s only has one 'a', return empty string.
        
        🐢 Solution: Brute Force ⏰: O(n^2) 🪐: O(n)
        🐇 Solution: Sliding Window Pattern ⏰: O(n) 🪐: O(n)

            var minWindow = function (s, t) {
              let left = 0;
              let right = 0;
              let map = new Map();
              let min = Infinity;
              let result = "";
              for (let i = 0; i < t.length; i++) {
                map.set(t[i], (map.get(t[i]) || 0) + 1);
              }
              let count = map.size;
              while (right < s.length) {
                let char = s[right];
                if (map.has(char)) {
                  map.set(char, map.get(char) - 1);
                  if (map.get(char) === 0) {
                    count--;
                  }
                }
                right++;
                while (count === 0) {
                  if (right - left < min) {
                    min = right - left;
                    result = s.substring(left, right);
                  }
                  let char = s[left];
                  if (map.has(char)) {
                    map.set(char, map.get(char) + 1);
                    if (map.get(char) > 0) {
                      count++;
                    }
                  }
                  left++;
                }
              }
              return result;
            };
## [Valid Anagram](https://leetcode.com/problems/valid-anagram/) #242

        Pattern Used: Hash Table
        Problem: Given two strings s and t , write a function to determine if t is an anagram of s.
        🥚: #1 Input: s = "anagram", t = "nagaram" Output: true #2 Input: s = "rat", t = "car" Output: false

        🐢 Solution: Brute Force ⏰: O(nlogn) 🪐: O(n)
        🐇 Solution:  Hash Table  ⏰: O(n) 🪐: O(n)

            var isAnagram = function (s, t) {
              if (s.length !== t.length) {
                return false;
              }
              let map = new Map();
              for (let i = 0; i < s.length; i++) {
                map.set(s[i], (map.get(s[i]) || 0) + 1);
              }
              for (let i = 0; i < t.length; i++) {
                if (!map.has(t[i])) {
                  return false;
                }
                map.set(t[i], map.get(t[i]) - 1);
                if (map.get(t[i]) < 0) {
                  return false;
                }
              }
              return true;
            };
## [Group Anagrams](https://leetcode.com/problems/group-anagrams/) #49

        Pattern Used: Hash Table
        Problem: Given an array of strings strs, group the anagrams together. You can return the answer in any order.
        An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
        🥚: #1 Input: strs = ["eat","tea","tan","ate","nat","bat"] Output: [["bat"],["nat","tan"],["ate","eat","tea"]] #2 Input: strs = [""] Output: [[""]] #3 Input: strs = ["a"] Output: [["a"]]

        🐢 Solution: Brute Force ⏰: O(n^2)
        🐇 Solution:  Hash Table  ⏰: O(n) 🪐: O(n)

            var groupAnagrams = function (strs) {
              let map = new Map();
              for (let i = 0; i < strs.length; i++) {
                let sorted = strs[i].split("").sort().join("");
                if (!map.has(sorted)) {
                  map.set(sorted, []);
                }
                map.get(sorted).push(strs[i]);
              }
              return [...map.values()];
            };
## [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) #20

        Pattern Used: Stack
        Problem: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
        An input string is valid if:
        Open brackets must be closed by the same type of brackets.
        Open brackets must be closed in the correct order.
        🥚: #1 Input: s = "()" Output: true #2 Input: s = "()[]{}" Output: true #3 Input: s = "(]" Output: false #4 Input: s = "([)]" Output: false #5 Input: s = "{[]}" Output: true
        
        🐢 Solution: Brute Force ⏰: O(n^2) 🪐: O(n)
        🐇 Solution: Stack  ⏰: O(n) 🪐: O(n)

            var isValid = function (s) {
              let stack = [];
              let map = new Map();
              map.set("(", ")");
              map.set("{", "}");
              map.set("[", "]");
              for (let i = 0; i < s.length; i++) {
                if (map.has(s[i])) {
                  stack.push(s[i]);
                } else {
                  if (map.get(stack.pop()) !== s[i]) {
                    return false;
                  }
                }
              }
              return stack.length === 0;
            };
## [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) #125

        Pattern Used: Two Pointers
        Problem: Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
        🥚: #1 Input: s = "A man, a plan, a canal: Panama" Output: true Explanation: "amanaplanacanalpanama" is a palindrome.
        
        🐢 Solution: Brute Force ⏰: 
        🐇 Solution: Two Pointers ⏰: 

        var isPalindrome = function(s) {
            let cursor1 = 0;
            let cursor2 = s.length - 1;

            while (cursor1 < cursor2) {
                if (!(/^[a-zA-Z0-9]*$/.test(s[cursor1]))) {
                    cursor1++;
                    continue;
                }
                if (!(/^[a-zA-Z0-9]*$/.test(s[cursor2]))) {
                    cursor2--;
                    continue;
                }
                if (s[cursor1].toLowerCase() === s[cursor2].toLowerCase()) {
                    cursor1++;
                    cursor2--;
                    continue;
                }
                return false;
            }

            return true;
        };
            
        }
## [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) #5
        Pattern Used: Dynamic Programming
        Problem: Given a string s, return the longest palindromic substring in s.
        🥚: #1 Input: s = "babad" Output: "bab" Note: "aba" is also a valid answer. #2 Input: s = "cbbd" Output: "bb" #3 Input: s = "a" Output: "a" #4 Input: s = "ac" Output: "a"

        🐢 Solution: Brute Force ⏰: O(n^3) 🪐: O(1)
        🐇 Solution: Dynamic Programming ⏰: O(n^2) 🪐: O(n^2)

            var longestPalindrome = function (s) {
              let result = "";
              for (let i = 0; i < s.length; i++) {
                let odd = expand(s, i, i);
                let even = expand(s, i, i + 1);
                let max = odd.length > even.length ? odd : even;
                if (max.length > result.length) {
                  result = max;
                }
              }
              return result;
            };
            function expand(s, left, right) {
              while (left >= 0 && right < s.length && s[left] === s[right]) {
                left--;
                right++;
              }
              return s.substring(left + 1, right);
            }
## [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/) #647

        Pattern Used: Dynamic Programming
        Problem: Given a string s, return the number of palindromic substrings in it.
        A string is a palindrome when it reads the same backward as forward.
        A substring is a contiguous sequence of characters within the string.
        🥚: #1 Input: s = "abc" Output: 3 Explanation: Three palindromic strings: "a", "b", "c". #2 Input: s = "aaa" Output: 6 Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

        🐢 Solution: Brute Force ⏰: O(n^3) 🪐: O(1)
        🐇 Solution:  Dynamic Programming ⏰: O(n^2) 🪐: O(n^2)

            var countSubstrings = function (s) {
              let count = 0;
              for (let i = 0; i < s.length; i++) {
                count += expand(s, i, i);
                count += expand(s, i, i + 1);
              }
              return count;
            };
            function expand(s, left, right) {
              let count = 0;
              while (left >= 0 && right < s.length && s[left] === s[right]) {
                count++;
                left--;
                right++;
              }
              return count;
            }

---

## Tree
## [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

        Pattern Used: DFS
        Problem: Given the root of a binary tree, return its maximum depth.
        A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
        🥚: #1 Input: root = [3,9,20,null,null,15,7] Output: 3 #2 Input: root = [1,null,2] Output: 2 #3 Input: root = [] Output: 0 #4 Input: root = [0] Output: 1

        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution: DFS ⏰: O(n) 🪐: O(n)

            var maxDepth = function (root) {
              if (!root) return 0;
              return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
            };

## [Same Tree](https://leetcode.com/problems/same-tree/) #100

        Pattern Used: DFS
        Problem: Given the roots of two binary trees p and q, write a function to check if they are the same or not.
        Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
        🥚: #1 Input: p = [1,2,3], q = [1,2,3] Output: true #2 Input: p = [1,2], q = [1,null,2] Output: false #3 Input: p = [1,2,1], q = [1,1,2] Output: false

        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution: DFS ⏰: O(n) 🪐: O(n)

            var isSameTree = function (p, q) {
              if (!p && !q) return true;
              if (!p || !q) return false;
              if (p.val !== q.val) return false;
              return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
            };

## [Invert/Flip Binary Tree](https://leetcode.com/problems/invert-binary-tree/) #226

        Pattern Used: DFS
        Problem: Invert a binary tree.
        🥚: #1 Input: root = [4,2,7,1,3,6,9] Output: [4,7,2,9,6,3,1] #2 Input: root = [2,1,3] Output: [2,3,1] #3 Input: root = [] Output: []

        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution: DFS ⏰: O(n) 🪐: O(n)

            var invertTree = function (root) {
              if (!root) return null;
              let temp = root.left;
              root.left = root.right;
              root.right = temp;
              invertTree(root.left);
              invertTree(root.right);
              return root;
            };

## [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/) #124
        Pattern Used: DFS
        Problem: Given the root of a binary tree, return the maximum path sum of any path.
        A path is a collection of nodes that are connected by edges, where no node is connected to more than two other nodes. The path must contain at least one node and does not need to go through the root.
        🥚: #1 Input: root = [1,2,3] Output: 6 #2 Input: root = [-10,9,20,null,null,15,7] Output: 42

        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution: DFS ⏰: O(n) 🪐: O(n)

            var maxPathSum = function (root) {
              let max = -Infinity;
              function dfs(node) {
                if (!node) return 0;
                let left = Math.max(dfs(node.left), 0);
                let right = Math.max(dfs(node.right), 0);
                max = Math.max(max, left + right + node.val);
                return Math.max(left, right) + node.val;
              }
              dfs(root);
              return max;
            };
## [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/) #102

        Pattern Used: BFS
        Problem: Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
        🥚: #1 Input: root = [3,9,20,null,null,15,7] Output: [[3],[9,20],[15,7]] #2 Input: root = [1] Output: [[1]] #3 Input: root = [] Output: []

        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution: BFS ⏰: O(n) 🪐: O(n)

            var levelOrder = function (root) {
              let result = [];
              function dfs(node, level) {
                if (!node) return;
                if (!result[level]) result[level] = [];
                result[level].push(node.val);
                dfs(node.left, level + 1);
                dfs(node.right, level + 1);
              }
              dfs(root, 0);
              return result;
            };
## [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) #297

        Pattern Used: BFS
        Problem: Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
        Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
        🥚: #1 Input: root = [1,2,3,null,null,4,5] Output: [1,2,3,null,null,4,5]

        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution: BFS ⏰: O(n) 🪐: O(n)

            var serialize = function (root) {
              let result = [];
              function dfs(node) {
                if (!node) {
                  result.push(null);
                  return;
                }
                result.push(node.val);
                dfs(node.left);
                dfs(node.right);
              }
              dfs(root);
              return result;
            };
            var deserialize = function (data) {
              let index = 0;
              function dfs() {
                if (index >= data.length || data[index] === null) {
                  index++;
                  return null;
                }
                let node = new TreeNode(data[index]);
                index++;
                node.left = dfs();
                node.right = dfs();
                return node;
              }
              return dfs();
            };
## [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/) #572

        Pattern Used: DFS
        Problem: Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
        A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
        🥚: #1 Input: root = [3,4,5,1,2], subRoot = [4,1,2] Output: true #2 Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2] Output: false

        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution: DFS ⏰: O(n) 🪐: O(n)

            var isSubtree = function (root, subRoot) {
              if (!root) return false;
              if (isSameTree(root, subRoot)) return true;
              return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
            };
            var isSameTree = function (p, q) {
              if (!p && !q) return true;
              if (!p || !q) return false;
              if (p.val !== q.val) return false;
              return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
            };
## [Construct Binary Tree from Preorder & Inorder Traversal](https://leetcode.com/problemsconstruct-binary-tree-from-preorder-and-inorder-traversal/) #105

        Problem: Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
        🥚: #1 Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7] Output: [3,9,20,null,null,15,7] #2 Input: preorder = [-1], inorder = [-1] Output: [-1]

        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution: DFS ⏰: O(n) 🪐: O(n)
            var buildTree = function (preorder, inorder) {
              if (!preorder.length || !inorder.length) return null;
              let root = new TreeNode(preorder[0]);
              let index = inorder.indexOf(preorder[0]);
              root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index));
              root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
              return root;
            };
## [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/) #98

        Pattern Used: DFS
        Problem: Given the root of a binary tree, determine if it is a valid binary search tree (BST).
        A valid BST is defined as follows:
        The left subtree of a node contains only nodes with keys less than the node's key.
        The right subtree of a node contains only nodes with keys greater than the node's key.
        Both the left and right subtrees must also be binary search trees.
        🥚: #1 Input: root = [2,1,3] Output: true #2 Input: root = [5,1,4,null,null,3,6] Output: false

        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution: DFS ⏰: O(n) 🪐: O(n)

            var isValidBST = function (root) {
              function dfs(node, min, max) {
                if (!node) return true;
                if (node.val <= min || node.val >= max) return false;
                return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
              }
              return dfs(root, -Infinity, Infinity);
            };
## [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) #230
        Pattern Used: DFS
        Problem: Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.
        🥚: #1 Input: root = [3,1,4,null,2], k = 1 Output: 1 #2 Input: root = [5,3,6,2,4,null,null,1], k = 3 Output: 3
        
        🐢 Solution: Brute Force ⏰:
        🐇 Solution: DFS ⏰: O(n) 🪐: O(n)

            var kthSmallest = function (root, k) {
              let result = [];
              function dfs(node) {
                if (!node) return;
                dfs(node.left);
                result.push(node.val);
                dfs(node.right);
              }
              dfs(root);
              return result[k - 1];
            };
## [Lowest Common Ancestor of BST](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) #235

        Pattern Used: DFS
        Problem: Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
        According to the definition of LCA on Wikipedia: "The lowest common ancestor of two nodes p and q in a binary tree T is the lowest node that has both p and q as descendants (where we allow a node to be a descendant of itself)."
        🥚: #1 Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8 Output: 6 #2 Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4 Output: 2

        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution: DFS ⏰: O(n) 🪐: O(n)

            var lowestCommonAncestor = function (root, p, q) {
              if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);
              if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);
              return root;
            };
## [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/) #208

        Pattern Used: Trie
        Problem: Implement a trie with insert, search, and startsWith methods. 
        A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker. 
        Implement the Trie class: Trie() Initializes the trie object.
        void insert(String word) Inserts the string word into the trie.
        boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
        boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise
        🥚: #1 Input: ["Trie","insert","search","search","startsWith","insert","search"] Output: [null,null,true,false,true,null,true] Explanation: Trie trie = new Trie(); trie.insert("apple"); trie.search("apple"); // return True trie.search("app"); // return False trie.startsWith("app"); // return True trie.insert("app"); trie.search("app"); // return True

        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution: Trie ⏰: O(n) 🪐: O(n)

            var Trie = function () {
              this.root = {};
            };
            Trie.prototype.insert = function (word) {
              let node = this.root;
              for (let i = 0; i < word.length; i++) {
                if (!node[word[i]]) node[word[i]] = {};
                node = node[word[i]];
              }
              node.isEnd = true;
            };
            Trie.prototype.search = function (word) {
              let node = this.root;
              for (let i = 0; i < word.length; i++) {
                if (!node[word[i]]) return false;
                node = node[word[i]];
              }
              return node.isEnd === true;
            };
            Trie.prototype.startsWith = function (prefix) {
              let node = this.root;
              for (let i = 0; i < prefix.length; i++) {
                if (!node[prefix[i]]) return false;
                node = node[prefix[i]];
              }
              return true;
            };
## [Add and Search Word](https://leetcode.com/problems/add-and-search-word-data-structure-design/) #211

        Pattern Used: Trie
        Problem: Design a data structure that supports adding new words and finding if a string matches any previously added string.
        Implement the WordDictionary class:
        WordDictionary() Initializes the object.
        void addWord(word) Adds word to the data structure, it can be matched later.
        bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
        🥚: #1 Input: ["WordDictionary","addWord","addWord","addWord","search","search","search","search"] Output: [null,null,null,null,false,true,true,true] Explanation: WordDictionary wordDictionary = new WordDictionary(); wordDictionary.addWord("bad"); wordDictionary.addWord("dad"); wordDictionary.addWord("mad"); wordDictionary.search("pad"); // return False wordDictionary.search("bad"); // return True wordDictionary.search(".ad"); // return True wordDictionary.search("b.."); // return True

        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution: Trie ⏰: O(n) 🪐: O(n)

            var WordDictionary = function () {
              this.root = {};
            };
            WordDictionary.prototype.addWord = function (word) {
              let node = this.root;
              for (let i = 0; i < word.length; i++) {
                if (!node[word[i]]) node[word[i]] = {};
                node = node[word[i]];
              }
              node.isEnd = true;
            };
            WordDictionary.prototype.search = function (word) {
              let node = this.root;
              function dfs(node, i) {
                if (i === word.length) return node.isEnd === true;
                if (word[i] === '.') {
                  for (let key in node) {
                    if (dfs(node[key], i + 1)) return true;
                  }
                } else {
                  if (!node[word[i]]) return false;
                  return dfs(node[word[i]], i + 1);
                }
              }
              return dfs(node, 0);
            };

## [Word Search II](https://leetcode.com/problems/word-search-ii/) #212

        Pattern Used: Trie
        Problem: Given an m x n board of characters and a list of strings words, return all words on the board. Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
        🥚: #1 Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"] Output: ["eat","oath"] #2 Input: board = [["a","b"],["c","d"]], words = ["abcb"] Output: []

        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution: Trie ⏰: O(n) 🪐: O(n)

            var findWords = function (board, words) {
              let result = [];
              let root = {};
              for (let word of words) {
                let node = root;
                for (let i = 0; i < word.length; i++) {
                  if (!node[word[i]]) node[word[i]] = {};
                  node = node[word[i]];
                }
                node.isEnd = true;
              }
              let m = board.length;
              let n = board[0].length;
              let visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
              function dfs(node, i, j, str) {
                if (node.isEnd) {
                  result.push(str);
                  node.isEnd = false;
                }
                if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j]) return;
                if (!node[board[i][j]]) return;
                visited[i][j] = true;
                dfs(node[board[i][j]], i + 1, j, str + board[i][j]);
                dfs(node[board[i][j]], i - 1, j, str + board[i][j]);
                dfs(node[board[i][j]], i, j + 1, str + board[i][j]);
                dfs(node[board[i][j]], i, j - 1, str + board[i][j]);
                visited[i][j] = false;
              }
              for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                  if (root[board[i][j]]) dfs(root[board[i][j]], i, j, board[i][j]);
                }
                }
                return result;
            };


--- 

## Heap

## [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/) #213

        Pattern Used: Heap
        Problem: You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.
        🥚: #1 Input: lists = [[1,4,5],[1,3,4],[2,6]] Output: [1,1,2,3,4,4,5,6] #2 Input: lists = [] Output: [] #3 Input: lists = [[]] Output: []

        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution: Heap ⏰: O(n) 🪐: O(n)

            var mergeKLists = function (lists) {
              let heap = new MinHeap();
              for (let list of lists) {
                while (list) {
                  heap.insert(list.val);
                  list = list.next;
                }
              }
              let dummy = new ListNode();
              let node = dummy;
              while (heap.size() > 0) {
                node.next = new ListNode(heap.extract());
                node = node.next;
              }
              return dummy.next;
            };
            class MinHeap {
              constructor() {
                this.heap = [];
              }
              size() {
                return this.heap.length;
              }
              insert(val) {
                this.heap.push(val);
                this.bubbleUp();
              }
              bubbleUp() {
                let idx = this.heap.length - 1;
                while (idx > 0) {
                  let parentIdx = Math.floor((idx - 1) / 2);
                  if (this.heap[parentIdx] > this.heap[idx]) {
                    [this.heap[parentIdx], this.heap[idx]] = [
                      this.heap[idx],
                      this.heap[parentIdx],
                    ];
                    idx = parentIdx;
                  } else {
                    break;
                  }
                }
              }
              extract() {
                let min = this.heap[0];
                let end = this.heap.pop();
                if (this.heap.length > 0) {
                  this.heap[0] = end;
                  this.sinkDown();
                }
                return min;
              }
              sinkDown() {
                let idx = 0;
                let length = this.heap.length;
                let element = this.heap[0];
                while (true) {
                  let leftChildIdx = 2 * idx + 1;
                  let rightChildIdx = 2 * idx + 2;
                  let leftChild, rightChild;
                  let swap = null;
                  if (leftChildIdx < length) {
                    leftChild = this.heap[leftChildIdx];
                    if (leftChild < element) {
                      swap = leftChildIdx;
                    }
                  }
                    if (rightChildIdx < length) {
                        rightChild = this.heap[rightChildIdx];
                        if (
                        (swap === null && rightChild < element) ||
                        (swap !== null && rightChild < leftChild)     ) {
                        swap = rightChildIdx;
                        }
                    }
                    if (swap === null) break;
                    this.heap[idx] = this.heap[swap];
                    this.heap[swap] = element;
                    idx = swap;
                }
                }
            }

## [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/) #

        Pattern Used: Heap
        Problem: Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
        🥚: #1 Input: nums = [1,1,1,2,2,3], k = 2 Output: [1,2] #2 Input: nums = [1], k = 1 Output: [1]

        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution: Heap ⏰: O(n) 🪐: O(n)

            var topKFrequent = function (nums, k) {
            let map = new Map();
            for (let num of nums) {
                map.set(num, map.get(num) + 1 || 1);
            }
            let heap = new MaxHeap();
            for (let [key, value] of map) {
                heap.insert([key, value]);
                if (heap.size() > k) heap.extract();
            }
            let result = [];
            while (heap.size() > 0) {
                result.push(heap.extract()[0]);
            }
            return result;
            };
            class MaxHeap {
            constructor() {
                this.heap = [];
            }
            size() {
                return this.heap.length;
            }
            insert(val) {
                this.heap.push(val);
                this.bubbleUp();
            }
            bubbleUp() {
                let idx = this.heap.length - 1;
                while (idx > 0) {
                let parentIdx = Math.floor((idx - 1) / 2);
                if (this.heap[parentIdx][1] < this.heap[idx][1]) {
                    [this.heap[parentIdx], this.heap[idx]] = [
                    this.heap[idx],
                    this.heap[parentIdx],
                    ];
                    idx = parentIdx;
                } else {
                    break;
                }
                }
            }
            extract() {
                let max = this.heap[0];
                let end = this.heap.pop();
                if (this.heap.length > 0) {
                this.heap[0] = end;
                this.sinkDown();
                }
                return max;
            }
            sinkDown() {
                let idx = 0;
                let length = this.heap.length;
                let element = this.heap[0];
                while (true) {
                let leftChildIdx = 2 * idx + 1;
                let rightChildIdx = 2 * idx + 2;
                let leftChild, rightChild;
                let swap = null;
                if (leftChildIdx < length) {
                    leftChild = this.heap[leftChildIdx];
                    if (leftChild[1] > element[1]) {
                    swap = leftChildIdx;
                    }
                }
                if (rightChildIdx < length) {
                    rightChild = this.heap[rightChildIdx];
                    if (
                    (swap === null && rightChild[1] > element[1]) ||
                    (swap !== null && rightChild[1] > leftChild[1]) ) {
                    swap = rightChildIdx;
                    }
                }
                if (swap === null) break;
                this.heap[idx] = this.heap[swap];
                this.heap[swap] = element;
                idx = swap;
                }
            }
            }

## [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/) #

        Pattern Used: Heap
        Problem: Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values. For example, for arr = [2,3,4], the median is 3. For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5. Implement the MedianFinder class: MedianFinder() initializes the MedianFinder object. void addNum(num) adds the integer num from the data stream to the data structure. double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
        🥚: #1 Input: ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"] [[], [1], [2], [], [3], []] Output: [null, null, null, 1.5, null, 2.0] #2 Input: ["MedianFinder", "addNum", "findMedian", "addNum", "findMedian"] [[], [2], [], [3], []] Output: [null, null, 2.0, null, 2.5

        🐢 Solution: Brute Force ⏰: O(n) 🪐: O(n)
        🐇 Solution: Heap ⏰: O(n) 🪐: O(n)

            var MedianFinder = function () {
            this.minHeap = new MinHeap();
            this.maxHeap = new MaxHeap();
            };
            MedianFinder.prototype.addNum = function (num) {
            if (this.minHeap.size() === 0 || num > this.minHeap.peek()) {
                this.minHeap.insert(num);
            } else {
                this.maxHeap.insert(num);
            }
            if (this.minHeap.size() - this.maxHeap.size() > 1) {
                this.maxHeap.insert(this.minHeap.extract());
            } else if (this.maxHeap.size() - this.minHeap.size() > 1) {
                this.minHeap.insert(this.maxHeap.extract());
            }
            };
            MedianFinder.prototype.findMedian = function () {
            if (this.minHeap.size() === this.maxHeap.size()) {
                return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
            } else if (this.minHeap.size() > this.maxHeap.size()) {
                return this.minHeap.peek();
            } else {
                return this.maxHeap.peek();
            }
            };
            class MinHeap {
            constructor() {
                this.heap = [];
            }
            size() {
                return this.heap.length;
            }
            peek() {
                return this.heap[0];
            }
            insert(val) {
                this.heap.push(val);
                this.bubbleUp();
            }
            bubbleUp() {
                let idx = this.heap.length - 1;
                while (idx > 0) {
                let parentIdx = Math.floor((idx - 1) / 2);
                if (this.heap[parentIdx] > this.heap[idx]) {
                    [this.heap[parentIdx], this.heap[idx]] = [
                    this.heap[idx],
                    this.heap[parentIdx],
                    ];
                    idx = parentIdx;
                } else {
                    break;
                }
                }
            }
            extract() {
                let min = this.heap[0];
                let end = this.heap.pop();
                if (this.heap.length > 0) {
                this.heap[0] = end;
                this.sinkDown();
                }
                return min;
            }
            sinkDown() {
                let idx = 0;
                let length = this.heap.length;
                let element = this.heap[0];
                while (true) {
                let leftChildIdx = 2 * idx + 1;
                let rightChildIdx = 2 * idx + 2;
                let leftChild, rightChild;
                let swap = null;
                if (leftChildIdx < length) {
                    leftChild = this.heap[leftChildIdx];
                    if (leftChild < element) {
                    swap = leftChildIdx;
                    }
                }
                if (rightChildIdx < length) {
                    rightChild = this.heap[rightChildIdx];
                    if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild) ) {
                    swap = rightChildIdx;
                    }
                }
                if (swap === null) break;
                this.heap[idx] = this.heap[swap];
                this.heap[swap] = element;
                idx = swap;
                }
            }
            }
            class MaxHeap {
            constructor() {
                this.heap = [];
            }
            size() {
                return this.heap.length;
            }
            peek() {
                return this.heap[0];
            }
            insert(val) {
                this.heap.push(val);
                this.bubbleUp();
            }
            bubbleUp() {
                let idx = this.heap.length - 1;
                while (idx > 0) {
                let parentIdx = Math.floor((idx - 1) / 2);
                if (this.heap[parentIdx] < this.heap[idx]) {
                    [this.heap[parentIdx], this.heap[idx]] = [
                    this.heap[idx],
                    this.heap[parentIdx],
                    ];
                    idx = parentIdx;
                } else {
                    break;
                }
                }
            }
            extract() {
                let max = this.heap[0];
                let end = this.heap.pop();
                if (this.heap.length > 0) {
                this.heap[0] = end;
                this.sinkDown();
                }
                return max;
            }
            sinkDown() {
                let idx = 0;
                let length = this.heap.length;
                let element = this.heap[0];
                while (true) {
                let leftChildIdx = 2 * idx + 1;
                let rightChildIdx = 2 * idx + 2;
                let leftChild, rightChild;
                let swap = null;
                if (leftChildIdx < length) {
                    leftChild = this.heap[leftChildIdx];
                    if (leftChild > element) {
                    swap = leftChildIdx;
                    }
                }
                if (rightChildIdx < length) {
                    rightChild = this.heap[rightChildIdx];
                    if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild) ) {
                    swap = rightChildIdx;
                    }
                }
                if (swap === null) break;
                this.heap[idx] = this.heap[swap];
                this.heap[swap] = element;
                idx = swap;
                }
            }
            }

## Leetcode Sorting ❓s:
        912. Sort an Array
        922. Sort Array By Parity II
        973. K Closest Points to Origin
        977. Squares of a Sorted Array
        1470. Shuffle the Array
        1480. Running Sum of 1d Array
        1512. Number of Good Pairs
        1672. Richest Customer Wealth
        1678. Goal Parser Interpretation
        1720. Decode XORed Array
        1721. Swapping Nodes in a Linked List
        1742. Maximum Number of Balls in a Box
        1773. Count Items Matching a Rule
        1812. Determine Color of a Chessboard Square
        1822. Sign of the Product of an Array
        1828. Queries on Number of Points Inside a Circle
        1832. Check if the Sentence Is Pangram
        1846. Maximum Element After Decreasing and Rearranging
        1854. Maximum Population Year
        1869. Longer Contiguous Segments of Ones than Zeros
        1877. Minimize Maximum Pair Sum in Array
        1880. Check if Word Equals Summation of Two Words
        1886. Determine Whether Matrix Can Be Obtained By Rotation
        1893. Check if All the Integers in a Range Are Covered
        1894. Find the Student that Will Replace the Chalk
        1898. Maximum Number of Removable Characters
        1903. Largest Odd Number in String
        1909. Remove One Element to Make the Array Strictly Increasing
        1913. Maximum Product Difference Between Two Pairs
        1917. Maximum Alternating Subsequence Sum
        1920. Build Array from Permutation
        1921. Eliminate Maximum Number of Monsters


## Types of Data Structures

    1. Array
    2. Linked List
    3. Stack
    4. Queue
    5. Hash Table
    6. Binary Tree
    7. Binary Search Tree
    8. Heap
    9. Trie
    10. Graph
    11. Matrix
    12. Set
    13. Map
    14. String
    15. Bitwise
    16. Segment Tree
    17. Fenwick Tree
    18. DisjoSet
    19. Suffix Array
    20. Suffix Tree
    21. Sparse Table
    22. Sparse Matrix
    23. Bloom Filter
    24. LRU Cache


## FLOW CHART❓

    1. What is the input?
    2. What is the output?
    3. What is the constraint?
    4. What is the edge case?
    5. What is the brute force solution?
    6. What is the optimal solution?
    7. What is the ⏰ of the brute force solution?
    8. What is the ⏰ of the optimal solution?
    9. What is the 🪐 of the brute force solution?
    10. What is the 🪐 of the optimal solution?
    11. What is the data structure to use?
    12. What is the algorithm to use?


## 14 Patterns: 

      1. Sliding Window Pattern:

        [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
        [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)
        3. [Longest Substring with At Most Two Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/)
        4. [Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/)
        5. [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
        6. [Longest Substring with At Least K Repeating Characters](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/)
        7. [Permutation in String](https://leetcode.com/problems/permutation-in-string/)
        8. [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
        9. [Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)
        10. [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
        11. [Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/)
        12. [Maximum Number of Vowels in a Substring of Given Length](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)
        13. [Replace the Substring for Balanced String](https://leetcode.com/problems/replace-the-substring-for-balanced-string/)
        14. [Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/)
    2. Two Pointers Pattern:
        1. [Two Sum](https://leetcode.com/problems/two-sum/)
        2. [3Sum](https://leetcode.com/problems/3sum/)
        3. [3Sum Smaller](https://leetcode.com/problems/3sum-smaller/)
        4. [4Sum](https://leetcode.com/problems/4sum/)
        5. [4Sum II](https://leetcode.com/problems/4sum-ii/)
        6. [Two Sum II - Input array is sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
        7. [Two Sum III - Data structure design](https://leetcode.com/problems/two-sum-iii-data-structure-design/)
        8. [Two Sum IV - Input is a BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/)
        9. [Two Sum Less Than K](https://leetcode.com/problems/two-sum-less-than-k/)
        10. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
        11. [Remove Element](https://leetcode.com/problems/remove-element/)
        12. [Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)
        13. [Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)
        14. [Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)
        15. [Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/)
        16. [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
        17. [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
        18. [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)
        19. [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)
        20. [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)
        21. [Partition List](https://leetcode.com/problems/partition-list/)
        22. [Sort List](https://leetcode.com/problems/sort-list/)
    3. Fast and Slow Pointers Pattern:
        1. [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
        2. [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)
        3. [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)
        4. [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)
        5. [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)
        6. [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
        7. [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
        8. [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)
        9. [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)
        10. [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)
        11. [Sort List](https://leetcode.com/problems/sort-list/)
        12. [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
        13. [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)
        14. [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)
        15. [Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)
        16. [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)
        17. [Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
        18. [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
        19. [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)
        20. [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)
        21. [Swap Nodes in Pairs](https://leetcode.com/problems/swap-nodes-in-pairs/)
        22. [Sort List](https://leetcode.com/problems/sort-list/)
    4. Merge Intervals Pattern:
        1. [Merge Intervals](https://leetcode.com/problems/merge-intervals/)
        2. [Insert Interval](https://leetcode.com/problems/insert-interval/)
        3. [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)
        4. [Meeting Rooms](https://leetcode.com/problems/meeting-rooms/)
        5. [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)
        6. [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)
        7. [Range Module](https://leetcode.com/problems/range-module/)
        8. [Add Bold Tag in String](https://leetcode.com/problems/add-bold-tag-in-string/)
        9. [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/)
        10. [Insert Delete GetRandom O(1) - Duplicates allowed](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/)
        11. [Data Stream as DisjoIntervals](https://leetcode.com/problems/data-stream-as-disjoint-intervals/)
        12. [Summary Ranges](https://leetcode.com/problems/summary-ranges/)
        13. [Summary Ranges II](https://leetcode.com/problems/summary-ranges-ii/)
        14. [Employee Free Time](https://leetcode.com/problems/employee-free-time/)
        15. [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)
        16. [Range Module](https://leetcode.com/problems/range-module/)
        17. [Add Bold Tag in String](https://leetcode.com/problems/add-bold-tag-in-string/)
        18. [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/)
        19. [Insert Delete GetRandom O(1) - Duplicates allowed](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/)
        20. [Data Stream as DisjoIntervals](https://leetcode.com/problems/data-stream-as-disjoint-intervals/)
        21. [Summary Ranges](https://leetcode.com/problems/summary-ranges
    5. Cyclic Sort Pattern:
        1. [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
        2. [Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)
        3. [Find the Missing Number](https://leetcode.com/problems/find-the-missing-number/)
        4. [Find the Smallest Missing Positive Number](https://leetcode.com/problems/find-the-smallest-missing-positive-number/)
        5. [Find the Corrupt Pair](https://leetcode.com/problems/find-the-corrupt-pair/)
        6. [Find All Missing Numbers](https://leetcode.com/problems/find-all-missing-numbers/)
        7. [Find the First K Missing Positive Numbers](https://leetcode.com/problems/find-the-first-k-missing-positive-numbers/)
        8. [Find the First Missing Positive Number](https://leetcode.com/problems/find-the-first-missing-positive-number/)
        9. [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
        10. [Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)
        11. [Find the Missing Number](https://leetcode.com/problems/find-the-missing-number/)
        12. [Find the Smallest Missing Positive Number](https://leetcode.com/problems/find-the-smallest-missing-positive-number/)
        13. [Find the Corrupt Pair](https://leetcode.com/problems/find-the-corrupt-pair/)
        14. [Find All Missing Numbers](https://leetcode.com/problems/find-all-missing-numbers/)
        15. [Find the First K Missing Positive Numbers](https://leetcode.com/problems/find-the-first-k-missing-positive-numbers/)
        16. [Find the First Missing Positive Number](https://leetcode.com/problems/find-the-first-missing-positive-number/)
    6. In-place Reversal of a LinkedList Pattern:
        1. [Reverse a Sub-list](https://leetcode.com/problems/reverse-linked-list-ii/)
        2. [Reverse every K-element Sub-list](https://leetcode.com/problems/reverse-nodes-in-k-group/)
        3. [Reverse Alternating K-element Sub-list](https://leetcode.com/problems/reverse-nodes-in-k-group/)
        4. [Reverse a Sub-list](https://leetcode.com/problems/reverse-linked-list-ii/)
        5. [Reverse every K-element Sub-list](https://leetcode.com/problems/reverse-nodes-in-k-group/)
        6. [Reverse Alternating K-element Sub-list](https://leetcode.com/problems/reverse-nodes-in-k-group/)
    7. Tree Breadth First Search Pattern:
        1. [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
        2. [Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)
        3. [Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/)
        4. [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
        5. [Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)
        6. [Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/)
    8. Tree Depth First Search Pattern:
        1. [Binary Tree Path Sum](https://leetcode.com/problems/path-sum/)
        2. [All Paths for a Sum](https://leetcode.com/problems/path-sum-ii/)
        3. [Sum of Path Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/)
        4. [Path With Given Sequence](https://leetcode.com/problems/path-sum-iii/)
        5. [Count Paths for a Sum](https://leetcode.com/problems/path-sum-iv/)
        6. [Binary Tree Path Sum](https://leetcode.com/problems/path-sum/)
        7. [All Paths for a Sum](https://leetcode.com/problems/path-sum-ii/)
        8. [Sum of Path Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/)
        9. [Path With Given Sequence](https://leetcode.com/problems/path-sum-iii/)
        10. [Count Paths for a Sum](https://leetcode.com/problems/path-sum-iv/)
    9. Two Heaps Pattern:
        1. [Find the Median of a Number Stream](https://leetcode.com/problems/find-median-from-data-stream/)
        2. [Sliding Window Median](https://leetcode.com/problems/sliding-window-median/)
        3. [Find the Median of a Number Stream](https://leetcode.com/problems/find-median-from-data-stream/)
        4. [Sliding Window Median](https://leetcode.com/problems/sliding-window-median/)
    10. Subsets Pattern:
        1. [Subsets](https://leetcode.com/problems/subsets/)
        2. [Subsets With Duplicates](https://leetcode.com/problems/subsets-ii/)
        3. [Permutations](https://leetcode.com/problems/permutations/)
        4. [Permutations With Duplicates](https://leetcode.com/problems/permutations-ii/)
        5. [String Permutations by changing case](https://leetcode.com/problems/letter-case-permutation/)
        6. [Balanced Parentheses](https://leetcode.com/problems/generate-parentheses/)
        7. [Unique Generalized Abbreviations](https://leetcode.com/problems/generalized-abbreviation/)
        8. [Subsets](https://leetcode.com/problems/subsets/)
        9. [Subsets With Duplicates](https://leetcode.com/problems/subsets-ii/)
        10. [Permutations](https://leetcode.com/problems/permutations/)
        11. [Permutations With Duplicates](https://leetcode.com/problems/permutations-ii/)
        12. [String Permutations by changing case](https://leetcode.com/problems/letter-case-permutation/)
        13. [Balanced Parentheses](https://leetcode.com/problems/generate-parentheses/)
        14. [Unique Generalized Abbreviations](https://leetcode.com/problems/generalized-abbreviation/)
    11. Modified Binary Search Pattern:
        1. [Order-agnostic Binary Search](https://leetcode.com/problems/binary-search/)
        2. [Ceiling of a Number](https://leetcode.com/problems/find-smallest-letter-greater-than-target/)
        3. [Next Letter](https://leetcode.com/problems/find-smallest-letter-greater-than-target/)
        4. [Number Range](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
        5. [Search in a Sorted Infinite Array](https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/)
        6. [Minimum Difference Element](https://leetcode.com/problems/find-k-closest-elements/)
        7. [Bitonic Array Maximum](https://leetcode.com/problems/find-peak-element/)
        8. [Order-agnostic Binary Search](https://leetcode.com/problems/binary-search/)
        9. [Ceiling of a Number](https://leetcode.com/problems/find-smallest-letter-greater-than-target/)
        10. [Next Letter](https://leetcode.com/problems/find-smallest-letter-greater-than-target/)
        11. [Number Range](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
        12. [Search in a Sorted Infinite Array](https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/)
        13. [Minimum Difference Element](https://leetcode.com/problems/find-k-closest-elements/)
        14. [Bitonic Array Maximum](https://leetcode.com/problems/find-peak-element/)
    12. Top 'K' Elements Pattern:
        1. [Kth Smallest Number](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)
        2. [Kth Largest Number](https://leetcode.com/problems/kth-largest-element-in-an-array/)
        3. [Connect Ropes](https://leetcode.com/problems/minimum-cost-to-connect-sticks/)
        4. [Top 'K' Frequent Numbers](https://leetcode.com/problems/top-k-frequent-elements/)
        5. [K Closest Points to the Origin](https://leetcode.com/problems/k-closest-points-to-origin/)
        6. [Kth Smallest Number](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)
        7. [Kth Largest Number](https://leetcode.com/problems/kth-largest-element-in-an-array/)
        8. [Connect Ropes](https://leetcode.com/problems/minimum-cost-to-connect-sticks/)
        9. [Top 'K' Frequent Numbers](https://leetcode.com/problems/top-k-frequent-elements/)
        10. [K Closest Points to the Origin](https://leetcode.com/problems/k-closest-points-to-origin/)
    13. K-way Merge Pattern:
        1. [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
        2. [Kth Smallest Number in M Sorted Lists](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)
        3. [Kth Smallest Number in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)
        4. [Smallest Number Range](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/)
        5. [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
        6. [Kth Smallest Number in M Sorted Lists](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)
        7. [Kth Smallest Number in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)
        8. [Smallest Number Range](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/)
    14. Topological Sort Pattern:
        1. [Tasks Scheduling](https://leetcode.com/problems/course-schedule/)
        2. [Tasks Scheduling Order](https://leetcode.com/problems/course-schedule-ii/)
        3. [All Tasks Scheduling Orders](https://leetcode.com/problems/course-schedule-ii/)
        4. [Tasks Scheduling](https://leetcode.com/problems/course-schedule/)
        5. [Tasks Scheduling Order](https://leetcode.com/problems/course-schedule-ii/)
        6. [All Tasks Scheduling Orders](https://leetcode.com/problems/course-schedule-ii/)
    15. 0/1 Knapsack Pattern:
        1. [Equal Subset Sum Partition](https://leetcode.com/problems/partition-equal-subset-sum/)
        2. [Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
        3. [Minimum Subset Sum Difference](https://leetcode.com/problems/partition-equal-subset-sum/)
        4. [Count of Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
        5. [Minimum Subset Sum Difference](https://leetcode.com/problems/partition-equal-subset-sum/)
        6. [Count of Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
    16. Bit Manipulation Pattern:
        1. [Single Number](https://leetcode.com/problems/single-number/)
        2. [Find the Corrupt Pair](https://leetcode.com/problems/set-mismatch/)
        3. [Complement of Base 10 Number](https://leetcode.com/problems/complement-of-base-10-integer/)
        4. [Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/)
        5. [Single Number](https://leetcode.com/problems/single-number/)
        6. [Find the Corrupt Pair](https://leetcode.com/problems/set-mismatch/)
        7. [Complement of Base 10 Number](https://leetcode.com/problems/complement-of-base-10-integer/)
        8. [Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/)





