/*
Question 4
Given a sorted array of distinct integers and a target value, return the index if the
target is found. If not, return the index where it would be if it were inserted in
order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2
*/

var searchInsert = function(nums, target) {
    
    let low = 0,
        high = nums.length - 1;
    
    while(low <= high){
        let mid = Math.floor(low +(high-low)/2);
        
        if(nums[mid] == target){
            return mid;
        }
        else if (nums[mid] < target){
          low = mid + 1;
        }
        else{
           high = mid - 1;
        }
    }
    return low;
    
    
};

console.log(searchInsert([1,3,5,6],4))