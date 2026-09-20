class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prod = 1;
        let zeroNum = 0;
        for (let num of nums) {
          if (num !== 0) prod *= num;
          else zeroNum++;
        }
        if (zeroNum > 1) {
             return Array(nums.length).fill(0);
        }                  
            
        let res = [];
        for (let i = 0; i < nums.length; i++) {
          if (zeroNum > 0) {
            res[i] = nums[i] === 0 ? prod : 0;
          } else {
            res[i] = prod / nums[i];
          }
        }
        return res;
    }
}
