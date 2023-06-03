# DSA 2DArray 1st Assignment

## Q1
Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

**Example 1:**

Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

Output: [1,5]

**Explanation:** Only 1 and 5 appeared in the three arrays.

### Answer -

```javascript
  const commonElements = (arr1, arr2, arr3) => {
  const result = [];
  let ptr1 = 0,
    ptr2 = 0,
    ptr3 = 0;

  while (ptr1 < arr1.length && ptr2 < arr2.length && ptr3 < arr3.length) {
    const num1 = arr1[ptr1];
    const num2 = arr2[ptr2];
    const num3 = arr3[ptr3];

    if (num1 === num2 && num2 === num3) {
      result.push(num1);
      ptr1++;
      ptr2++;
      ptr3++;
    } else {
      const minNum = Math.min(num1, num2, num3);

      if (num1 === minNum) {
        ptr1++;
      }
      if (num2 === minNum) {
        ptr2++;
      }
      if (num3 === minNum) {
        ptr3++;
      }
    }
  }

  return result;
};

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 5, 7, 9];
const arr3 = [1, 3, 4, 5, 8];
const result = commonElements(arr1, arr2, arr3);
console.log(result);
// Output: [1, 5]
```

## Q2

Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*

- answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
- answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.

**Note** that the integers in the lists may be returned in **any** order.

**Example 1:**

**Input:** nums1 = [1,2,3], nums2 = [2,4,6]

**Output:** [[1,3],[4,6]]

**Explanation:**

For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].

For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].



####

```javascript
  const findDisjoint = (nums1, nums2) => {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
  
    const answer = [[], []];
  
    for (const num of set1) {
      if (!set2.has(num)) {
        answer[0].push(num);
      }
    }
  
    for (const num of set2) {
      if (!set1.has(num)) {
        answer[1].push(num);
      }
    }
  
    return answer;
  };
  
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  const result = findDisjoint(nums1, nums2);
  console.log(result);
```

## Q3

💡 Given a 2D integer array matrix, return *the **transpose** of* matrix.

The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

**Example 1:**

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

Output: [[1,4,7],[2,5,8],[3,6,9]]


### Answer -

```javascript
  const transpose = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    const transposedMatrix = [];
  
    for (let col = 0; col < cols; col++) {
      const newRow = [];
      for (let row = 0; row < rows; row++) {
        newRow.push(matrix[row][col]);
      }
      transposedMatrix.push(newRow);
    }
  
    return transposedMatrix;
  };
  
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const result = transpose(matrix);
  console.log(result);
```

## Q4

💡 Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is **maximized**. Return *the maximized sum*.

**Example 1:**

Input: nums = [1,4,3,2]

Output: 4

**Explanation:** All possible pairings (ignoring the ordering of elements) are:

1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3

2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3

3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4

So the maximum possible sum is 4.

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
  
  const nums = [1, 4, 3, 2];
  const result = arrayPairSum(nums);
  console.log(result);
```

## Q5

💡 **Question 5**
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

Given the integer n, return *the number of **complete rows** of the staircase you will build*.
**Input:** n = 5

**Output:** 2

**Explanation:** Because the 3rd row is incomplete, we return 2.

### Answer -

```javascript
  const arrangeCoins = (n) => {
    let rowCount = 0;
  
    for (let i = 1; i <= n; i++) {
      n -= i;
  
      if (n >= 0) {
        rowCount++;
      } else {
        break;
      }
    }
  
    return rowCount;
  };
  
  const n = 5;
  const result = arrangeCoins(n);
  console.log(result);
```

## Q6

💡 Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

**Example 1:**

Input: nums = [-4,-1,0,3,10]

Output: [0,1,9,16,100]

**Explanation:** After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100]

### Answer -

```javascript
  const sortedSquares = (nums) => {
    const result = [];
  
    for (let i = 0; i < nums.length; i++) {
      const squared = nums[i] * nums[i];
      result.push(squared);
    }
  
    result.sort((a, b) => a - b);
  
    return result;
  };
  
  const nums = [-4, -1, 0, 3, 10];
  const result = sortedSquares(nums);
  console.log(result);
```

## Q7

💡 **Question 7**
You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

Count and return *the number of maximum integers in the matrix after performing all the operations*

**Input:** m = 3, n = 3, ops = [[2,2],[3,3]]

**Output:** 4

**Explanation:** The maximum integer in M is 2, and there are four of it in M. So return 4.


### Answer -

```javascript
  const maxCount = (m, n, ops) => {
    let minRow = m;
    let minCol = n;
  
    for (let i = 0; i < ops.length; i++) {
      const [ai, bi] = ops[i];
      minRow = Math.min(minRow, ai);
      minCol = Math.min(minCol, bi);
    }
  
    return minRow * minCol;
  };
  
  const m = 3;
  const n = 3;
  const ops = [
    [2, 2],
    [3, 3],
  ];
  const result = maxCount(m, n, ops);
  console.log(result);
```

## Q8

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

*Return the array in the form* [x1,y1,x2,y2,...,xn,yn].

**Example 1:**

**Input:** nums = [2,5,1,3,4,7], n = 3

**Output:** [2,3,5,4,1,7]

**Explanation:** Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

### Answer -

```javascript
  const shuffle = (nums, n) => {
    const result = [];
  
    let i = 0;
    let j = n;
  
    while (i < n) {
      result.push(nums[i]); 
      result.push(nums[j]); 
      i++;
      j++;
    }
  
    return result;
  };
  
  const nums = [2, 5, 1, 3, 4, 7];
  const n = 3;
  const result = shuffle(nums, n);
  console.log(result);
```