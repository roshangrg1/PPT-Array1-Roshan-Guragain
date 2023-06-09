# DSA Recursion 1st Assignment

## Q1

Given an integer `n`, return *`true` if it is a power of two. Otherwise, return `false`*.

An integer `n` is a power of two, if there exists an integer `x` such that `n == 2x`.

**Example 1:**
Input: n = 1 

Output: true

**Example 2:**
Input: n = 16 

Output: true

**Example 3:**
Input: n = 3 

Output: false


### Answer -


```javascript
const isPowerOfTwo = (n) => {
  if (n === 1) return true;

  if (n < 1) return false;

  return isPowerOfTwo(n / 2);
};

console.log(isPowerOfTwo(1));
// Output: true
console.log(isPowerOfTwo(16));
// Output: true
console.log(isPowerOfTwo(3));
// Output: false
```




## Q2

Given a number n, find the sum of the first natural numbers.

**Example 1:**

Input: n = 3 

Output: 6

**Example 2:**

Input  : 5 

Output : 15

## Answer

```javascript
const sumOfFirstN = (n) => {
  if (n === 1) return 1;

  return n + sumOfFirstN(n - 1);
};

console.log(sumOfFirstN(3));
// Output: 6
console.log(sumOfFirstN(5));
// Output: 15

```

## Q3

Given a positive integer, N. Find the factorial of N. 

**Example 1:**

Input: N = 5 

Output: 120

**Example 2:**

Input: N = 4

Output: 24



### Answer -

```javascript
const factorial = (n) => {
  if (n === 0 || n === 1) return 1;

  return n * factorial(n - 1);
};

console.log(factorial(5));
// Output: 120
console.log(factorial(4));
// Output: 24

```

## Q4

Given a number N and a power P, the task is to find the exponent of this number raised to the given power, i.e. N^P.

**Example 1 :** 

Input: N = 5, P = 2

Output: 25

**Example 2 :**
Input: N = 2, P = 5

Output: 32

### Answer -

```javascript

const exponent = (N, P) => {
    if (P === 0) return 1;
  
    return N * exponent(N, P - 1);
  };
  
  console.log(exponent(5, 2));
  // Output: 25
  console.log(exponent(2, 5));
  // Output: 32
```

## Q5

Given an array of integers **arr**, the task is to find maximum element of that array using recursion.

**Example 1:**

Input: arr = {1, 4, 3, -5, -4, 8, 6};
Output: 8

**Example 2:**

Input: arr = {1, 4, 45, 6, 10, -8};
Output: 45

### Answer -

```javascript
const findMax = (arr, start, end) => {
    if (start === end) {
      return arr[start];
    }
  
    const mid = Math.floor((start + end) / 2);
    const leftMax = findMax(arr, start, mid);
    const rightMax = findMax(arr, mid + 1, end);
  
    return Math.max(leftMax, rightMax);
  };
  
  const getMax = (arr) => {
    return findMax(arr, 0, arr.length - 1);
  };
  
  console.log(getMax([1, 4, 3, -5, -4, 8, 6]));
  // Output: 8
  console.log(getMax([1, 4, 45, 6, 10, -8]));
  // Output: 45
  

```

## Q6

Given first term (a), common difference (d) and a integer N of the Arithmetic Progression series, the task is to find Nth term of the series.

**Example 1:**

Input : a = 2 d = 1 N = 5
Output : 6
The 5th term of the series is : 6

**Example 2:**

Input : a = 5 d = 2 N = 10
Output : 23
The 10th term of the series is : 23

### Answer -

```javascript

const findNthTerm = (a, d, N) => {
    if (N === 1) {
      return a;
    }
  
    return findNthTerm(a + d, d, N - 1);
  };
  
  console.log(findNthTerm(2, 1, 5));
  // Output: 6
  console.log(findNthTerm(5, 2, 10));
  // Output: 23
```

## Q7

Given a string S, the task is to write a program to print all permutations of a given string.

**Example 1:**

***Input:***

*S = “ABC”*

***Output:***

*“ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”*

**Example 2:**

***Input:***

*S = “XY”*

***Output:***

*“XY”, “YX”*

### Answer -

```javascript

const swap = (str, i, j) => {
    const charArray = str.split("");
    const temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return charArray.join("");
  };
  
  const generatePermutations = (str, left, right, result) => {
    if (left === right) {
      result.push(str);
      return;
    }
  
    for (let i = left; i <= right; i++) {
      const swapped = swap(str, left, i);
      generatePermutations(swapped, left + 1, right, result);
    }
  };
  
  const printPermutations = (S) => {
    const result = [];
    generatePermutations(S, 0, S.length - 1, result);
    return result;
  };
  
  console.log(printPermutations('ABC'));
  // Output: ["ABC", "ACB", "BAC", "BCA", "CBA", "CAB"]
  console.log(printPermutations('XY'));
  // Output: ["XY", "YX"]

```

## Q8

Given an array, find a product of all array elements.

**Example 1:**

Input  : arr[] = {1, 2, 3, 4, 5}
Output : 120
**Example 2:**

Input  : arr[] = {1, 6, 3}
Output : 18

### Answer -

```javascript

const getProduct = (arr, index = 0) => {
  if (index === arr.length) {
    return 1;
  }

  return arr[index] * getProduct(arr, index + 1);
};

console.log(getProduct([1, 2, 3, 4, 5]));
// Output: 120
console.log(getProduct([1, 6, 3]));
// Output: 18
  
```