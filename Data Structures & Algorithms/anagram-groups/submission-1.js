class Solution {
      /**
       * @param {string[]} strs
       * @return {string[][]}
       */
      groupAnagrams(strs) {
        const res = {};

        const sortedS = strs.map((word) =>
          word.slice().split("").sort().join(""),
        );
        for (let i = 0; i < sortedS.length; i++) {

          if (!res[sortedS[i]]) {
            res[sortedS[i]] = [strs[i]];
          } else {
            res[sortedS[i]].push(strs[i]);
          }
        }
        return Object.values(res);
      }
};