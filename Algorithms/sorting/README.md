## Sorting Algorithms

# Description

Sorting is a very classic problem of reordering items (that can be compared, e.g., integers, floating-point numbers, strings, etc) of an array (or a list) in a certain order (increasing, non-decreasing (increasing or flat), decreasing, non-increasing (decreasing or flat), lexicographical, etc).

There are many different sorting algorithms, each has its own advantages and limitations.
Sorting is commonly used as the introductory problem in various Computer Science classes to showcase a range of algorithmic ideas.

Without loss of generality, we assume that we will sort only Integers, not necessarily distinct, in non-decreasing order in this visualization

# Types of Sorting Algorithms

## Sorting Algorithms: 
        1. Bubble Sort
            ❓: Array == AlmostSorted && Array < Small Size
            ⏰: O(n^2) 🪐 O(1)
            🎭 PsuendoCode:
                for i = 0 to n-1
                    for j = 0 to n-1
                        if arr[j] > arr[j+1]
                            swap(arr[j], arr[j+1])
        2. Selection Sort
            ❓: Array != Sorted && Array < Small Size
            ⏰: O(n^2) 🪐: O(1)
            🎭 PsuendoCode:
                for i = 0 to n-1
                    min = i
                    for j = i+1 to n-1
                        if arr[j] < arr[min]
                            min = j
                    swap(arr[i], arr[min])
        3. Insertion Sort
            ❓: Array  == AlmostSorted && Array < Small Size
            ⏰: O(n^2) 🪐: O(1)
            🎭 PsuendoCode:
                for i = 1 to n-1
                    key = arr[i]
                    j = i-1
                    while j >= 0 && arr[j] > key
                        arr[j+1] = arr[j]
                        j = j-1
                    arr[j+1] = key
        4. Merge Sort
            ❓: Array != Sorted && Array < Small Size
            ⏰: O(nlogn) 🪐: O(n)
            🎭 PsuendoCode:
                mergeSort(arr, l, r)
                    if l < r
                        m = l + (r-l)/2
                        mergeSort(arr, l, m)
                        mergeSort(arr, m+1, r)
                        merge(arr, l, m, r)
                merge(arr, l, m, r)
                    n1 = m-l+1
                    n2 = r-m
                    L[] = new array of size n1
                    R[] = new array of size n2
                    for i = 0 to n1-1
                        L[i] = arr[l+i]
                    for j = 0 to n2-1
                        R[j] = arr[m+1+j]
                    i = 0
                    j = 0
                    k = l
                    while i < n1 && j < n2
                        if L[i] <= R[j]
                            arr[k] = L[i]
                            i++
                        else
                            arr[k] = R[j]
                            j++
                        k++
                    while i < n1
                        arr[k] = L[i]
                        i++
                        k++
                    while j < n2
                        arr[k] = R[j]
                        j++
                        k++
        5. Quick Sort
              ❓: Array != Sorted && Array > LargeSize
              ⏰: O(nlogn) 🪐: O(logn)
              🎭 PsuendoCode:
                  quickSort(arr, low, high)
                      if low < high
                          pi = partition(arr, low, high)
                          quickSort(arr, low, pi-1)
                          quickSort(arr, pi+1, high)
                  partition(arr, low, high)
                      pivot = arr[high]
                      i = low-1
                      for j = low to high-1
                          if arr[j] < pivot
                              i++
                              swap(arr[i], arr[j])
                      swap(arr[i+1], arr[high])
                      return i+1
        6. Heap Sort
                ❓: Array != Sorted && Array > LargeSize
                ⏰: O(nlogn) 🪐: O(1)
                🎭 PsuendoCode:
                    heapSort(arr, n)
                        for i = n/2-1 to 0
                            heapify(arr, n, i)
                        for i = n-1 to 0
                            swap(arr[0], arr[i])
                            heapify(arr, i, 0)
                    heapify(arr, n, i)
                        largest = i
                        l = 2*i+1
                        r = 2*i+2
                        if l < n && arr[l] > arr[largest]
                            largest = l
                        if r < n && arr[r] > arr[largest]
                            largest = r
                        if largest != i
                            swap(arr[i], arr[largest])
                            heapify(arr, n, largest)
        7. Counting Sort
              ❓:Array == Integers && Array < Small Size
              ⏰: O(n+k) 🪐: O(k)
              🎭 PsuendoCode:
                  countingSort(arr, n)
                      max = getMax(arr, n)
                      count[] = new array of size max+1
                      output[] = new array of size n
                      for i = 0 to max
                          count[i] = 0
                      for i = 0 to n-1
                          count[arr[i]]++
                      for i = 1 to max
                          count[i] += count[i-1]
                      for i = n-1 to 0
                          output[count[arr[i]]-1] = arr[i]
                          count[arr[i]]--
                      for i = 0 to n-1
                          arr[i] = output[i]
                  getMax(arr, n)
                      max = arr[0]
                      for i = 1 to n-1
                          if arr[i] > max
                              max = arr[i]
                      return max
        8. Radix Sort
            ❓:Array == Integers && Array < Small Size
            ⏰: O(nk) 🪐: O(n+k)
            🎭 PsuendoCode:
                radixSort(arr, n)
                    m = getMax(arr, n)
                    for exp = 1 to m
                        countSort(arr, n, exp)
                countSort(arr, n, exp)
                    output[] = new array of size n
                    count[] = new array of size 10
                    for i = 0 to 9
                        count[i] = 0
                    for i = 0 to n-1
                        count[(arr[i]/exp)%10]++
                    for i = 1 to 9
                        count[i] += count[i-1]
                    for i = n-1 to 0
                        output[count[(arr[i]/exp)%10]-1] = arr[i]
                        count[(arr[i]/exp)%10]--
                    for i = 0 to n-1
                        arr[i] = output[i]
                getMax(arr, n)
                    max = arr[0]
                    for i = 1 to n-1
                        if arr[i] > max
                            max = arr[i]
                    return max
        9. Bucket Sort
              ❓:Array == Integers && Array < Small Size
              ⏰: O(n+k) 🪐: O(n+k)
              🎭 PsuendoCode:
                  bucketSort(arr, n)
                      buckets[] = new array of size n
                      for i = 0 to n-1
                          buckets[i] = new array of size 0
                      for i = 0 to n-1
                          index = arr[i]*n
                          buckets[index].add(arr[i])
                      for i = 0 to n-1
                          insertionSort(buckets[i])
                      index = 0
                      for i = 0 to n-1
                          for j = 0 to buckets[i].size()
                              arr[index++] = buckets[i].get(j)
                  insertionSort(arr, n)
                      for i = 1 to n-1
                          key = arr[i]
                          j = i-1
                          while j >= 0 && arr[j] > key
                              arr[j+1] = arr[j]
                              j = j-1
                          arr[j+1] = key
# Sorting Algorithm Operations



# Time Complexity
