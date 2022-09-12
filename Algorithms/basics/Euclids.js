// write Euclids class algorithm in javascript
// Euclid's algorithm is an efficient method for computing the greatest common divisor (GCD) of two numbers, the largest number that divides both of them without leaving a remainder.
// Euclid's algorithm is based on the principle that the greatest common divisor of two numbers does not change if the larger number is replaced by its difference with the smaller number.
// For example, 21 is the GCD of 252 and 105 (as 21 is the largest number that divides both of them), and the same number 21 is also the GCD of 105 and 252 − 105 = 147. Since this replacement reduces the larger of the two numbers, repeating this process gives successively smaller pairs of numbers until the two numbers become equal. When that occurs, they are the GCD of the original two numbers.
// The algorithm is named after the ancient Greek mathematician Euclid, who first described it in his Elements.
// The algorithm can be summarized as follows:
//     If b = 0, then the answer is a
//     Otherwise, gcd(a, b) is the same as gcd(b, a mod b)
//     */
class Euclids {
    constructor() {
        this.root = null;
    }
    gcd(a, b) {
        if (b == 0) {
            return a;
        }
        return this.gcd(b, a % b);
    }
    buildCodes(node, currentCode, codes) {
        if (node == null) {
            return;
        }
        if (node.data != "#") {
            codes[node.data] = currentCode;
        }
        this.buildCodes(node.left, currentCode + "0", codes);
        this.buildCodes(node.right, currentCode + "1", codes);
    }
    encodeString(string, codes) {
        let encodedString = "";
        for (let i = 0; i < string.length; i++) {
            encodedString += codes[string[i]];
        }
        return encodedString;
    }
    decodeString(root, encodedString) {
        let decodedString = "";
        let current = root;
        for (let i = 0; i < encodedString.length; i++) {
            if (encodedString[i] == "0") {
                current = current.left;
            }
            else {
                current = current.right;
            }
            if (current.left == null && current.right == null) {
                decodedString += current.data;
                current = root;
            }
        }
        return decodedString;
    }
}

const _Euclids = Euclids;
export { _Euclids as Euclids };


