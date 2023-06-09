// Given an integer `n`, return *`true` if it is a power of two. Otherwise, return `false`*.

// An integer `n` is a power of two, if there exists an integer `x` such that `n == 2x`.

// **Example 1:**
// Input: n = 1

// Output: true

// **Example 2:**
// Input: n = 16

// Output: true

// **Example 3:**
// Input: n = 3

// Output: false

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