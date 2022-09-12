/* uffmanCoding Compression class algorithm in javascript
    Huffman coding is a
    lossless data compression
    algorithm.
    The idea is to assign variable-length codes to input characters, lengths of the assigned codes are based on the frequencies of corresponding characters. The most frequent character gets the smallest code and the least frequent character gets the largest code.
    The variable length codes assigned to input characters are Prefix Codes, means the codes (bit sequences) are assigned in such a way that the code assigned to one character is not the prefix of code assigned to any other character. This is how Huffman Coding makes sure that there is no ambiguity when decoding the generated bitstream.
    Huffman tree is a binary tree where each leaf node represents a character and its frequency of occurrence in the input data.
    The non-leaf nodes are called internal nodes and each of them has a frequency equal to the sum of the frequencies of the leaf nodes under it.
    The Huffman tree is constructed in a bottom up manner such that the two nodes of the tree with the minimum frequency are taken as the left and right child of a new node which is created with a frequency equal to the sum of the two nodes frequencies. This process is repeated until there is only one node left in the tree.
    The Huffman tree for the input data "aaaabbbccd" is shown in the figure below.
    */
    import { Node } from "../../DataStructures/Nodes/Node.js";
    //import { MinHeap } from "../../DataStructures/Heaps/MinHeap.js";
    class HuffmanCoding {
        constructor() {
            this.root = null;
        }
        encode(string) {
            let frequencies = this.getFrequencies(string);
            let heap = this.buildHeap(frequencies);
            this.root = this.buildTree(heap);
            let codes = this.buildCodes(this.root);
            let encodedString = this.encodeString(string, codes);
            return encodedString;
        }
        decode(encodedString, root) {
            let current = root;
            let decodedString = "";
            for (let i = 0; i < encodedString.length; i++) {
                if (encodedString[i] == '0') {
                    current = current.left;
                } else {
                    current = current.right;
                }
                if (current.left == null && current.right == null) {
                    decodedString += current.data;
                    current = root;
                }
            }
            return decodedString;
        }
        getFrequencies(string) {
            let frequencies = {};
            for (let i = 0; i < string.length; i++) {
                if (frequencies[string[i]] == null) {
                    frequencies[string[i]] = 0;
                }
                frequencies[string[i]]++;
            }
            return frequencies;
        }
        buildHeap(frequencies) {
            let heap = new MinHeap();
            for (let key in frequencies) {
                let node = new Node(key, frequencies[key]);
                heap.insert(node);
            }
            return heap;
        }
        buildTree(heap) {
            while (heap.size() > 1) {
                let left = heap.extractRoot();
                let right = heap.extractRoot();
                let sum = left.frequency + right.frequency;
                let node = new Node(null, sum, left, right);
                heap.insert(node);
            }
            return heap.extractRoot();
        }
        buildCodes(root) {
            let codes = {};
            this.buildCodesHelper(root, "", codes);
            return codes;
        }
        buildCodesHelper(root, code, codes) {
            if (root == null) {
                return;
            }
            if (root.data != null) {
                codes[root.data] = code;
            }
            this.buildCodesHelper(root.left, code + "0", codes);
            this.buildCodesHelper(root.right, code + "1", codes);
        }
        encodeString(string, codes) {
            let encodedString = "";
            for (let i = 0; i < string.length; i++) {
                encodedString += codes[string[i]];
            }
            return encodedString;
        }
    }
    
    
    
    class MinHeap {
        constructor() {
            this.heap = [];
        }
        size() {
            return this.heap.length;
        }
        insert(node) {
            this.heap.push(node);
            this.bubbleUp();
        }
        extractRoot() {
            let min = this.heap[0];
            let last = this.heap.pop();
            if (this.heap.length > 0) {
                this.heap[0] = last;
                this.sinkDown(0);
            }
            return min;
        }
        bubbleUp() {
            let index = this.heap.length - 1;
            while (index > 0) {
                let parent = Math.floor((index + 1) / 2) - 1;
                if (this.heap[parent].frequency > this.heap[index].frequency) {
                    let temp = this.heap[parent];
                    this.heap[parent] = this.heap[index];
                    this.heap[index] = temp;
                    index = parent;
                } else {
                    break;
                }
            }
        }
        sinkDown(index) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;
            if (left < this.heap.length && this.heap[left].frequency < this.heap[smallest].frequency) {
                smallest = left;
            }
            if (right < this.heap.length && this.heap[right].frequency < this.heap[smallest].frequency) {
                smallest = right;
            }
            if (smallest != index) {
                let temp = this.heap[smallest];
                this.heap[smallest] = this.heap[index];
                this.heap[index] = temp;
                this.sinkDown(smallest);
            }
        }
    }
    
    const _HuffmanCoding = HuffmanCoding;
    export { _HuffmanCoding as HuffmanCoding };
    