// write LinearSearch class algorithm in javascript
// Linear search or sequential search is a method for finding an element within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched.
// A linear search runs in at worst linear time and makes at most n comparisons, where n is the length of the list. If each element is equally likely to be searched, then linear search has an average case of n/2 comparisons, but the best case is 1 comparison.
// Linear search is rarely practical because other search algorithms and schemes, such as the binary search algorithm and hash tables, allow significantly faster searching comparison to Linear search.
// Linear search is used only for small lists (where its asymptotic inefficiency is not a high penalty) or if the list is not sorted (because the other search algorithms require sorted lists).
// Linear search is also called sequential search.
//
class LinearSearch {
    constructor() {
        this.root = null;
    }
    linearSearch(array, key) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == key) {
                return i;
            }
        }
        return -1;
    }
}

const _LinearSearch = LinearSearch;
export { _LinearSearch as LinearSearch };