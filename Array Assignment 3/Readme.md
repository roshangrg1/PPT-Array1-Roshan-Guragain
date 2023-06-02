# DSA Array 2nd Assignment

## Q1
Question 1
Given an integer array nums of length n and an integer target, find three integers
in nums such that the sum is closest to the target.
Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2

Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

### Answer -


```javascript
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
```

## Q2
Question 2
Given an array nums of n integers, return an array of all the unique quadruplets
[nums[a], nums[b], nums[c], nums[d]] such that:
           ● 0 <= a, b, c, d < n
           ● a, b, c, and d are distinct.
           ● nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

Example 1:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]



####

```javascript
var fourSum = function(nums, target) {
    nums.sort((a,b)=>a-b)      //First sort the array in ascending order
    let len = nums.length;
    let left=0, right=0, sum=0;
    let result = [];
    for(let i=0; i<len-3; i++){
        for(let j=i+1; j<len-2; j++){
            left = j+1;
            right = len-1;
            while(left < right){
                sum = nums[i] + nums[j] + nums[left] + nums[right];
                if(sum === target){
                    result.push([nums[i], nums[j], nums[left], nums[right]])
                    while(nums[left]===nums[left+1]) left++;     //To avoid same values for left pointer
                    while(nums[right]===nums[right-1]) right--;  //To avoid same values for right pointer
                    left++;
                    right--;
                } else if (sum < target){
                    left++;
                } else {
                    right--;
                }
            }
            while(nums[j]===nums[j+1]) j++;
        }
        while(nums[i]===nums[i+1]) i++;
    }
    return result;
};

console.log(fourSum([1,0,-1,0,-2,2], 0))
```

## Q3
💡 **Question 3**
A permutation of an array of integers is an arrangement of its members into a
sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr:
[1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].

The next permutation of an array of integers is the next lexicographically greater
permutation of its integer. More formally, if all the permutations of the array are
sorted in one container according to their lexicographical order, then the next
permutation of that array is the permutation that follows it in the sorted container.

If such an arrangement is not possible, the array must be rearranged as the
lowest possible order (i.e., sorted in ascending order).

● For example, the next permutation of arr = [1,2,3] is [1,3,2].
● Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
● While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not
have a lexicographical larger rearrangement.

Given an array of integers nums, find the next permutation of nums.
The replacement must be in place and use only constant extra memory.

**Example 1:**
Input: nums = [1,2,3]
Output: [1,3,2]


### Answer -

```javascript
  var nextPermutation = function(nums) {
    for (let i = nums.length - 2; i >= 0; i--) {
        let currentIndexSwap = i;
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[j] > nums[i] && nums[j] < nums[currentIndexSwap]) || (nums[j] > nums[currentIndexSwap] && currentIndexSwap === i)) {
                currentIndexSwap = j;
            }
        }
        if (i !== currentIndexSwap) {
            [nums[i], nums[currentIndexSwap]] = [nums[currentIndexSwap], nums[i]];
            for (let k = i + 1; k < nums.length; k++) {
                for (let p = k + 1; p < nums.length; p++) {
                    if (nums[p] < nums[k]) {
                        [nums[k], nums[p]] = [nums[p], nums[k]];
                    }
                }
            }
            return nums;
        }
    }
    return nums.sort((a, b) => a - b);
};

console.log(nextPermutation([1,2,3]))
```

## Q4

Given a sorted array of distinct integers and a target value, return the index if the
target is found. If not, return the index where it would be if it were inserted in
order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

### Answer -

```javascript
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
```

## Q5

💡 **Question 5**
You are given a large integer represented as an integer array digits, where each
digits[i] is the ith digit of the integer. The digits are ordered from most significant
to least significant in left-to-right order. The large integer does not contain any
leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].


### Answer -

```javascript
  var plusOne = function(arr) {
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i]<9){
            arr[i]++;
            return arr;
        }
        arr[i] = 0;
    }
    arr.unshift(1);
    return arr;
};

console.log(plusOne([1,2,3]))
```

## Q6
      Question 6
Given a non-empty array of integers nums, every element appears twice except
for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only
constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1


### Answer -

```javascript
function singleNumber(nums) {
  let result = 0;

  // XOR operation cancels out the duplicate numbers
  for (let num of nums) {
    result ^= num;
  }

  return result;
}

// Example usage:
const nums = [2, 2, 1];
const single = singleNumber(nums);
console.log(single);
```

## Q7
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

### Answer -

```javascript
  
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
```

## Q8

Question 8
Given an array of meeting time intervals where intervals[i] = [starti, endi],
determine if a person could attend all meetings.

Example 1:
Input: intervals = [ [0,30],[5,10],[15,20] ]
Output: false

### Answer -

```javascript
  function canAttendAllMeetings(intervals) {
    // Sort the intervals based on their start times
    intervals.sort((a, b) => a[0] - b[0]);
  
    // Check if there is any overlap between consecutive intervals
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] < intervals[i - 1][1]) {
        // If the start time of the current interval is before the end time of the previous interval, there is an overlap
        return false;
      }
    }
  
    // No overlap found, person can attend all meetings
    return true;
  }
  
  // Example usage:
  const intervals = [[0, 30], [5, 10], [15, 20]];
  const canAttend = canAttendAllMeetings(intervals);
  console.log(canAttend);  // Output: false
```