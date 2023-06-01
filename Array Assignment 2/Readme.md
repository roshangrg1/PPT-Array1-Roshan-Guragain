# DSA Array 1st Assignment

## Q1

Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2),..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

**Example 1:**
Input: nums = [1,4,3,2]
Output: 4

**Explanation:** All possible pairings (ignoring the ordering of elements) are:

1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4


### Answer -

```javascript
const arrayPairSum = (nums) => {
  nums.sort((a, b) => a - b);

  let sum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }

  return sum;
};

console.log(arrayPairSum([1, 4, 3, 2]));
```

## Q2
  Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor. 

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice. 

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

Example 1:
Input: candyType = [1,1,2,2,3,3]
Output: 3

Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

####

```javascript
const distributeCandies = (candyType) => {
  const maxType = candyType.length / 2;
  const set = new Set(candyType);

  return Math.min(maxType, set.size);
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
```

## Q3

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

### Answer -

```javascript
var findLHS = function (nums) {
  let map = new Map(),
    len = 0;
  for (let i = 0, j = 0; i < nums.length; i++)
    map.set(nums[i], map.get(nums[i]) + 1 || 1);
  for (const [key, value] of map)
    if (map.get(key - 1)) len = Math.max(len, map.get(key - 1) + value);
  return len;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
```

## Q4

Question 4
You have a long flowerbed in which some of the plots are planted, and some are not.
However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

### Answer -

```javascript
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) continue;

    if (
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }

  return n <= 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
```

## Q5

Question 5
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6

### Answer -

```javascript
  var maximumProduct = function(nums) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;
    let min2 = Infinity;
    let min1 = Infinity;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > max1) {
        [max1, max2, max3] = [nums[i], max1, max2];
      } else if (nums[i] > max2) {
        [max2, max3] = [nums[i], max2];
      } else if (nums[i] > max3) {
        max3 = nums[i];
      }
      if (nums[i] < min1) {
        [min2, min1] = [min1, nums[i]];
      } else if (nums[i] < min2) {
        min2 = nums[i];
      }
    }
    return Math.max(max1 * max2 * max3, max1 * min1 * min2);
  };

  console.log(maximumProduct([1,2,3]))
```

## Q6

Question 6
Given an array of integers nums which is sorted in ascending order, and an integer target,
write a function to search target in nums. If target exists, then return its index. Otherwise,
return -1.

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4

Explanation: 9 exists in nums and its index is 4

### Answer -

```javascript
  const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    console.log(right);
    while (left <= right) {
      let mid = Math.floor((left + right) / 2); // ! getting out mid val
      if (nums[mid] === target) { // ! if mid val is equal to target we will return the mid 
        return mid;
      } else if (nums[mid] < target) { 
  
        left = mid + 1; /// ! if mid val is less than target we will move the left pointer to mid+1
      } else {
          right = mid - 1; // ! if mid val is greater than target we will move the right pointer mid-1
      }
    }
    //! if we cant find the target we will return -1
    return -1;
  }

  console.log(search([-1,0,3,5,9,12]))
```

## Q7

Question 7
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

Example 1:
Input: nums = [1,2,2,3]
Output: true

### Answer -

```javascript
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
```

## Q8

Question 8
You are given an integer array nums and an integer k.

In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in nums.

Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

Example 1:
Input: nums = [1], k = 0
Output: 0

Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.

### Answer -

```javascript
  var smallestRangeI = function(nums, k) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    
    if (max - min <= 2*k) return 0;
    return max - min - 2*k;
};

console.log(smallestRangeI([1],0))
```
