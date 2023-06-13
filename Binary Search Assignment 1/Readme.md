# DSA Binary Search Assignment

## Q1

Given a non-negative integer `x`, return *the square root of* `x` *rounded down to the nearest integer*. The returned integer should be **non-negative** as well.

You **must not use** any built-in exponent function or operator.

- For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

**Example 1:**

```
Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
```



### Answer -


```javascript
var mySqrt = function(x) {
    if (x === 0) {
        return 0; 
    }
    
    let left = 1;
    let right = x;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let sqr = mid * mid;
        
        if (sqr === x) {
            return mid;
        } else if (sqr < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return right; // Return the floor value of the square root
};

console.log(mySqrt(16))

```

## Q2

A peak element is an element that is strictly greater than its neighbors.

Given a **0-indexed** integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to **any of the peaks**.

You may imagine that `nums[-1] = nums[n] = -∞`. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in `O(log n)` time.

**Example 1:**
```
Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
```

### Answer -


```javascript

var findPeakElement = function(nums) {
    var start = 0, end = nums.length - 1;
    while (start < end) {
        var mid = Math.floor((start + end) / 2);
        if (mid === 0) {
            return nums[0] >= nums[1] ? 0 : 1;
        }
        if (mid === end) {
            return nums[end - 1] >= nums[end - 2] ? end - 1 : end - 2;
        }

        if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
            return mid;
        }
        if (nums[mid] < nums[mid - 1]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
};

console.log(findPeakElement([1,2,3,1]))
```

## Q3

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return *the only number in the range that is missing from the array.*

**Example 1:**

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

**Example 2:**
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.


### Answer -


```javascript
  var missingNumber = function(nums) {
    let n = nums.length + 1;
       let total = (n * (n-1)) / 2;
       
       for (let num of nums) {
           total -= num;
       }
       
       return total;
}

console.log(missingNumber([0,1]))

```

## Q4

Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

There is only **one repeated number** in `nums`, return *this repeated number*.

You must solve the problem **without** modifying the array `nums` and uses only constant extra space.

Example 1
```
Input: nums = [1,3,4,2,2]
Output: 2
```


### Answer -


```javascript

var findDuplicate = function(nums) {
    
    // start hopping from Node_#0
    let [slow, fast] = [0,0];
    
    // for locating start node of cycle
    let check = 0;
    
    // Step_#1
    // Cycle detection
    // Let slow jumper and fast jumper meet somewhere in the cycle
    
    while( true ){
        
        // slow jumpper hops 1 step, while fast jumpper hops two steps forward
        slow = nums[ slow ];
        fast = nums[ nums[ fast ] ];
        
        if( slow == fast ){
            break;
        }
    }
    
    // Step_#2
    // Locate the start node of cycle (i.e., the duplicate number)
    while( true ){
        
        slow = nums[ slow ];
        check = nums[ check ];
        
        if( slow == check ){
            break;
        }
    }
    
    return check;
    
};

console.log(findDuplicate([1,3,4,2,2]))
```

## Q5

Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must be **unique** and you may return the result in **any order**.

**Example 1:**
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

### Answer -


```javascript
var interSection = function (nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i])) {
        if (!result.includes(nums1[i])) {
          result.push(nums1[i]);
        }
      }
    }
    return result;
  }

  console.log(interSection([1,2,2,1], [2,2]))


```

## Q6

Suppose an array of length `n` sorted in ascending order is **rotated** between `1` and `n` times. For example, the array `nums = [0,1,2,4,5,6,7]` might become:

- `[4,5,6,7,0,1,2]` if it was rotated `4` times.
- `[0,1,2,4,5,6,7]` if it was rotated `7` times.

Notice that **rotating** an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.

Given the sorted rotated array `nums` of **unique** elements, return *the minimum element of this array*.

You must write an algorithm that runs in `O(log n) time.`

**Example 1:**

```
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.



### Answer -


```javascript

var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
}

console.log(findMin([3,4,5,1,2]))
```


## Q7

Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

### Answer -


```javascript

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
```

## Q8

Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.

**Example 1:**
```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```
### Answer -


```javascript
var intersection = function (nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i])) {
        if (!result.includes(nums1[i])) {
          result.push(nums1[i]);
        }
      }
    }
    return result;
  };

console.log(intersection([1,2,2,1],[2,2]))
```



