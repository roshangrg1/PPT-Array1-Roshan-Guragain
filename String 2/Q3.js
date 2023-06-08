/*
  Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.

In one **step**, you can delete exactly one character in either string.

**Example 1:**

**Input:** word1 = "sea", word2 = "eat"

**Output:** 2

**Explanation:** You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
*/

var minDistance = function(word1, word2) {
  // Brute Force
  const lcs = (m, n) => {
      if (m === 0 || n === 0) {
          return 0;
      }
      const char1 = word1[m-1];
      const char2 = word2[n-1];
      if(char1 === char2) {
          return 1+lcs(m-1, n-1);
      } else {
          return Math.max(lcs(m, n-1), lcs(m-1, n));
      }
  }
  return word1.length + word2.length - 2* lcs(word1.length, word2.length)
}

console.log(minDistance("sea", "eat"))