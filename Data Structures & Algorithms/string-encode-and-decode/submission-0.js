class Solution {
    /**
       * @param {string[]} strs
       * @returns {string}
       */
      encode (strs) {
        return strs.map((str) => `${str.length}#${str}`).join("");
      };
      /**
       * @param {string} str
       * @returns {string[]}
       */
      decode (strs) {
        let arr = [];
        let i = 0;
        while (i < strs.length) {
          const pos = strs.indexOf("#", i);
          const len = Number(strs.slice(i, pos));
          i = pos + 1;
          const str = strs.slice(i, i + len);
          arr.push(str);
          i += len;
        }
        return arr;
      };
}
