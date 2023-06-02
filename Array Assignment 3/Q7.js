/*
    Question 7
You are given an inclusive range [lower, upper] and a sorted unique integer array
nums, where all elements are within the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in
nums.

Return the shortest sorted list of ranges that exactly covers all the missing
numbers. That is, no element of nums is included in any of the ranges, and each
missing number is covered by one of the ranges.

Example 1:
Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: [[2,2],[4,49],[51,74],[76,99]]

Explanation: The ranges are:
[2,2]
[4,49]
[51,74]
[76,99]
*/


function findMissingRanges(nums, lower, upper) {
    const result = [];
  
    // Helper function to add range to the result
    const addRange = (start, end) => {
      if (start === end) {
        result.push(`${start}`);
      } else {
        result.push(`${start}->${end}`);
      }
    };
  
    // Check if the lower bound is greater than the first element in nums
    if (lower < nums[0]) {
      addRange(lower, nums[0] - 1);
    }
  
    // Iterate through nums to find missing ranges
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] > 1) {
        addRange(nums[i - 1] + 1, nums[i] - 1);
      }
    }
  
    // Check if the upper bound is less than the last element in nums
    if (upper > nums[nums.length - 1]) {
      addRange(nums[nums.length - 1] + 1, upper);
    }
  
    // Return the resulting list of ranges
    return result.map(range => range.split('->').map(Number));
  }
  
  // Example usage:
  const nums = [0, 1, 3, 50, 75];
  const lower = 0;
  const upper = 99;
  const missingRanges = findMissingRanges(nums, lower, upper);
  console.log(missingRanges);
  // Output: [[2,2],[4,49],[51,74],[76,99]]
  