class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        const bucket = [];
        const result = [];

        for (let num of nums) {
          map[num] = (map[num] || 0) + 1;
        }
        console.log(Object.entries(map));

        for (let [num, freq] of Object.entries(map)) {
          if (!bucket[freq]) {
            bucket[freq] = new Set().add(num);
          } else {
            bucket[freq] = bucket[freq].add(num);
          }
        //   console.log(bucket[freq]);
        }
        // console.log(bucket);
        for (let i = bucket.length - 1; i >= 0; i--) {
          if (bucket[i]) result.push(...bucket[i]);
          if (result.length === k) break;
        }
        return result;
       
    };
}
