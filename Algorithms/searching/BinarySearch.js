// write BinarySearch class algorithm in javascript
// Binary search is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array.
// If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.
// Binary search runs in logarithmic time in the worst case, making O(log n) comparisons, where n is the number of elements in the array, and therefore is much more efficient than linear search which makes O(n) comparisons, where n is the number of elements in the array. However, binary search is slower than linear search for small arrays.
// Binary search is a dichotomic divide and conquer search algorithm.
// Binary search is a special case of the more general form of binary search, which is the interpolation search.
// Binary search is also known as half-interval search, logarithmic search, or binary chop.
//
class BinarySearch {
    constructor() {
        this.root = null;
    }
    binarySearch(array, key) {
        let low = 0;
        let high = array.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (array[mid] == key) {
                return mid;
            }
            else if (array[mid] < key) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
        return -1;
    }
}
const _BinarySearch = BinarySearch;
export { _BinarySearch as BinarySearch };