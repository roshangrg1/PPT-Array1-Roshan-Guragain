# DSA 2D Array 3rd Assignment

## Q1
  A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

- s[i] == 'I' if perm[i] < perm[i + 1], and
- s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

**Example 1:**

**Input:** s = "IDID"

**Output:**

[0,4,1,3,2]

**Example 1:**  

**Input:** original = [1,2,3,4], m = 2, n = 2

**Output:** [[1,2],[3,4]]

**Explanation:** The constructed 2D array should contain 2 rows and 2 columns.

The first group of n=2 elements in original, [1,2], becomes the first row in the constructed 2D array.

The second group of n=2 elements in original, [3,4], becomes the second row in the constructed 2D array.


### Answer -



```javascript
  const diStringMatch = (s) => {
  const n = s.length;
  const perm = [];
  let start = 0;
  let end = n;

  for (let i = 0; i < n; i++) {
    if (s[i] === "I") {
      perm.push(start);
      start++;
    } else if (s[i] === "D") {
      perm.push(end);
      end--;
    }
  }

  perm.push(start);

  return perm;
};

const s = "IDID";
const reconstructedPerm = diStringMatch(s);
console.log(reconstructedPerm);
```

## Q2

You are given an m x n integer matrix matrix with the following two properties:

- Each row is sorted in non-decreasing order.
- The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.

You must write a solution in O(log(m * n)) time complexity.

**Example 1:**

**Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

**Output:** true





#### Answer

```javascript
const searchMatrix = (matrix, target) => {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  const m = matrix.length;
  const n = matrix[0].length;
  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const row = Math.floor(mid / n);
    const col = mid % n;
    const num = matrix[row][col];

    if (num === target) {
      return true;
    } else if (num < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;
const result = searchMatrix(matrix, target);
console.log(result);

```

## Q3
Given an array of integers arr, return *true if and only if it is a valid mountain array*.

Recall that arr is a mountain array if and only if:

- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that:
    - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

    **Example 1:**

**Input:** arr = [2,1]

**Output:**

false



### Answer -

```javascript
  const validMountainArray = (arr) => {
    const n = arr.length;
    let i = 0;
  
    if (n < 3) {
      return false;
    }
  
    while (i < n - 1 && arr[i] < arr[i + 1]) {
      i++;
    }
  
    if (i === 0 || i === n - 1) {
      return false;
    }
  
    while (i < n - 1 && arr[i] > arr[i + 1]) {
      i++;
    }
  
    return i === n - 1;
  };
  
  const arr = [2, 1];
  const result = validMountainArray(arr);
  console.log(result);
```

## Q4

Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

**Example 1:**

**Input:** nums = [0,1]

**Output:** 2

**Explanation:**

[0, 1] is the longest contiguous subarray with an equal number of 0 and 1.


### Answer -

```javascript
  function findMaxLength(nums) {
    const n = nums.length;
    let maxLength = 0;
    let count = 0;
    const countMap = new Map();
  
    countMap.set(0, -1); 
  
    for (let i = 0; i < n; i++) {
      count += nums[i] === 1 ? 1 : -1;
  
      if (countMap.has(count)) {
        maxLength = Math.max(maxLength, i - countMap.get(count));
      } else {
        countMap.set(count, i);
      }
    }
  
    return maxLength;
  }
  
  const nums = [0, 1];
  const maxLength = findMaxLength(nums);
  console.log(maxLength);
```

## Q5

The **product sum** of two equal-length arrays a and b is equal to the sum of a[i] * b[i] for all 0 <= i < a.length (**0-indexed**).

- For example, if a = [1,2,3,4] and b = [5,2,3,1], the **product sum** would be 1*5 + 2*2 + 3*3 + 4*1 = 22.

Given two arrays nums1 and nums2 of length n, return *the **minimum product sum** if you are allowed to **rearrange** the **order** of the elements in* nums1.

**Example 1:**

**Input:** nums1 = [5,3,4,2], nums2 = [4,2,2,5]

**Output:** 40

**Explanation:**

We can rearrange nums1 to become [3,5,4,2]. The product sum of [3,5,4,2] and [4,2,2,5] is 3*4 + 5*2 + 4*2 + 2*5 = 40.

### Answer -

```javascript
  const minProductSum = (nums1, nums2) => {
    const n = nums1.length;
  
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => b - a);
  
    let minProductSum = 0;
  
    for (let i = 0; i < n; i++) {
      minProductSum += nums1[i] * nums2[i];
    }
  
    return minProductSum;
  };
  
  const nums1 = [5, 3, 4, 2];
  const nums2 = [4, 2, 2, 5];
  
  const result = minProductSum(nums1, nums2);
  console.log(result);
```

## Q6
  An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

**Example 1:**

**Input:** changed = [1,3,4,2,6,8]

**Output:** [1,3,4]

**Explanation:** One possible original array could be [1,3,4]:

- Twice the value of 1 is 1 * 2 = 2.
- Twice the value of 3 is 3 * 2 = 6.
- Twice the value of 4 is 4 * 2 = 8.

Other original arrays could be [4,3,1] or [3,1,4].


### Answer -

```javascript
  const findOriginalArray = (changed) => {
    const original = [];
    const map = new Map();
  
    for (let num of changed) {
      if (map.has(num / 2)) {
        original.push(num / 2);
        map.delete(num / 2);
      } else {
        map.set(num, (map.get(num) || 0) + 1);
      }
    }
  
    if (map.size === 0) {
      return original;
    } else {
      return [];
    }
  };
  
  const changed = [1, 3, 4, 2, 6, 8];
  const original = findOriginalArray(changed);
  console.log(original);
```

## Q7

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

**Example 1:**
**Input:** n = 3

**Output:** [[1,2,3],[8,9,4],[7,6,5]]
### Answer -

```javascript
  const generateMatrix = (n) => {
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let num = 1;
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
  
    while (num <= n * n) {
      for (let i = left; i <= right; i++) {
        matrix[top][i] = num;
        num++;
      }
      top++;
  
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = num;
        num++;
      }
      right--;
  
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num;
        num++;
      }
      bottom--;
  
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num;
        num++;
      }
      left++;
    }
  
    return matrix;
  };
  
  const n = 3;
  const matrix = generateMatrix(n);
  console.log(matrix);
```

## Q8
  Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

**Example 1:**
**Input:** mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]

**Output:**

[[7,0,0],[-7,0,3]]


### Answer -

```javascript
  const multiplySparseMatrices = (mat1, mat2) => {
    const m = mat1.length;
    const n = mat2[0].length;
    const result = Array.from({ length: m }, () => Array(n).fill(0));
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < mat1[0].length; k++) {
          result[i][j] += mat1[i][k] * mat2[k][j];
        }
      }
    }
  
    return result;
  };
  
  const mat1 = [
    [1, 0, 0],
    [-1, 0, 3],
  ];
  const mat2 = [
    [7, 0, 0],
    [0, 0, 0],
    [0, 0, 1],
  ];
  const result = multiplySparseMatrices(mat1, mat2);
  console.log(result);
```