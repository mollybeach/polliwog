// write a Bucket Sort class algorithm in javascript
// Bucket sort, or bin sort, is a sorting algorithm that works by distributing the elements of an array into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm.
// Bucket sort is a distribution sort, or a sorting algorithm that works by distributing the elements of an array into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm.

class BucketSort {
    constructor(array) {
        this.array = array;
        this.bucketSort(this.array);
    }
    bucketSort(array) {
        let i;
        let j;
        let n = array.length;
        let buckets = new Array(n);
        for (i = 0; i < buckets.length; i++) {
            buckets[i] = [];
        }
        for (i = 0; i < n; i++) {
            buckets[Math.floor(n * array[i])].push(array[i]);
        }
        array.length = 0;
        for (i = 0; i < n; i++) {
            buckets[i].sort(function (a, b) {
                return a - b;
            });
            for (j = 0; j < buckets[i].length; j++) {
                array.push(buckets[i][j]);
            }
        }
        return array;
    }
}
const _BucketSort = BucketSort;
export { _BucketSort as BucketSort };