class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {if (s.length !== t.length) return false;
        console.log(s.slice().split("").sort());
        return (
          s.slice().split("").sort().join() ===
          t.slice().split("").sort().join()
        );}
}
