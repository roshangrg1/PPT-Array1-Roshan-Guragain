/*
    Question 3
We define a harmonious array as an array where the difference between its maximum value
and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence
among all its possible subsequences.

A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

Example 1:
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5

Explanation: The longest harmonious subsequence is [3,2,2,2,3].
*/

var findLHS = function(nums) {
    let map=new Map(),len=0;
    for (let i = 0, j = 0; i < nums.length; i++) map.set(nums[i], map.get(nums[i]) + 1 || 1);
    for (const [key,value] of map) if (map.get(key - 1)) len = Math.max(len, map.get(key - 1) + value);
    return len; 
    };

    console.log(findLHS([1,3,2,2,5,2,3,7]))