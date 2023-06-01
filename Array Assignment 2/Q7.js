/*
    Question 7
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Example 1:
Input: nums = [1,2,2,3]
Output: true
*/

var isMonotonic = function(nums) {

    // Initialize two variables, `asc` and `des`, to `true`.
    // These variables will be used to track whether the list is increasing or decreasing.
    let asc = true;
    let des = true;
  
    // Iterate over the list, comparing each number to the next number.
    // If the current number is less than the next number, set `asc` to `false`.
    // If the current number is greater than the next number, set `des` to `false`.
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        asc = false;
      } else if (nums[i] < nums[i + 1]) {
        des = false;
      }
    }
  
    // Return `true` if either `asc` or `des` is `true`.
    // This means that the list is either increasing or decreasing.
    // Return `false` if both `asc` and `des` are `false`.
    // This means that the list is not monotonic.
    return asc || des;
  };

  console.log(isMonotonic([1,2,2,3]))