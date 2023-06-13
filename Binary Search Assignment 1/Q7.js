// Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

// If `target` is not found in the array, return `[-1, -1]`.

// You must write an algorithm with `O(log n)` runtime complexity.

// **Example 1:**

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

var search = function(nums, target) {
    let lo = 0, hi = nums.length-1;
    while (lo < hi) {
        let mid = lo + Math.floor((hi-lo+1)/2);
        if (target < nums[mid]) {
            hi = mid - 1
        } else {
            lo = mid; 
        }
    }
    return nums[lo]==target?lo:-1;
};

console.log(search([5,7,7,8,8,10], 6))