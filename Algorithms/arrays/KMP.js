
// KMP algorithm is a pattern searching algorithm that searches for occurrences of a word in text in O(n) time.
// The KMP matching algorithm uses degenerating property
// (pattern having same sub-patterns appearing more than once in the pattern) of the pattern and improves the worst case complexity to O(n).
// it is based on the idea that whenever we detect a mismatch (after some matches), we already know some of the characters in the text of the next window.
// we take advantage of this information to avoid matching the characters that we know will anyway match.
// what kind of algorithm is this? (sorting, searching, graph, math, etc)
class KMP { 
    constructor() {
        this.lps = []; // lp stands for longest prefix suffix
    }
    findPattern(text, pattern) {
        this.lps = this.computeLPS(pattern);
        let i = 0, j = 0;
        while (i < text.length) {
            if (text[i] == pattern[j]) {
                i++;
                j++;
            }
            if (j == pattern.length) {
                return i - j;
            }
            if (i < text.length && text[i] != pattern[j]) {
                if (j != 0) {
                    j = this.lps[j - 1];
                } else {
                    i++;
                }
            }
        }
        return -1;
    }
    computeLPS(pattern) {
        let i = 1, j = 0;
        while (i < pattern.length) {
            if (pattern[i] == pattern[j]) {
                j++;
                this.lps[i] = j;
                i++;
            } else {
                if (j != 0) {
                    j = this.lps[j - 1];
                } else {
                    this.lps[i] = 0;
                    i++;
                }
            }
        }
        return this.lps;
    }
}
const _KMP = KMP;
export { _KMP as KMP };