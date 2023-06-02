/* 
    Question 1
Given an integer array nums of length n and an integer target, find three integers
in nums such that the sum is closest to the target.
Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2

Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let closest = Infinity;
    for (let i=0;i<nums.length-2;i++) {
        let left = i+1; right = nums.length-1;
        while (left < right) {
            let localSum = nums[i] + nums[left] + nums[right];
            if (Math.abs(localSum - target) < Math.abs(closest - target)) closest = localSum;
            if (localSum > target) right--;
            else left++;
        }
    }
    return closest;
};

console.log(threeSumClosest([-1,2,1,-4], 1))